import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Payment() {
  const url = 'http://localhost:4000/users/payment';
  const navigate = useNavigate();
  const [address, setaddress] = useState('');
  const [paymentSummary, setpaymentSummary] = useState('');

  useEffect(() => {
    axios.get(url).then((res)=>{
      setpaymentSummary({
        items: res.data.result[0].productsTotal,
        shipping: res.data.result[0].orderShipping,
        tax: res.data.result[0].orderTax,
        total: res.data.result[0].orderTotal
      });
    })

    if(localStorage.shippingDetails){
      let getAddress = localStorage.getItem('shippingDetails');
      let shippingAddress = JSON.parse(getAddress);
      setaddress(shippingAddress);
    }
  }, [])

  const amount = paymentSummary.total;

  const saveOrderHistory = ()=>{
    const url = 'http://localhost:4000/users/dashboard';
    const orderHistory = {
      shippingName: address.fullName,
      shippingTelNumber: address.phoneNumber,
      shippingAddress: address.address + "," + ' ' + address.city + "," + ' ' + address.province + "," + ' ' + address.postalCode + " " + address.country,
      orderTotal: paymentSummary.total
    };
    axios.post(url, orderHistory);
    navigate('/');
  }

  let styleOne = {
    marginTop: '50px',
    marginBottom: '75px'
}

  let styleTwo = {
    display: 'flex',
    marginTop: '20px'
  }

  let styleThree = {
    width: '75%',
    padding: '20px',
    marginRight: '40px',
    height: '100%'
  }

  let styleFour = {
    width: '25%',
    padding: '20px',
    backgroundColor: '#83EFE2'
  }
  
  return (
    <div>
      <div className="container" style={styleOne}>
        <div style={styleTwo}>
          <div style={styleThree} className='shadow'>
            <h5 style={{marginBottom: '20px'}}><strong>Shipping Details</strong></h5>
            <p><strong>Name: </strong>{address.fullName}</p>
            <p><strong>Telephone Number: </strong>{address.phoneNumber}</p>
            <p><strong>Address: </strong>{address.address}, {address.city}, {address.province}, {address.postalCode}, {address.country}</p>
          </div>

          <div style={styleFour}>
            <div className='text-center'>
              <h5><strong>Order Summary</strong></h5>
            </div>

            <div className="row"><hr />
              <div className="col-6">
                <p>Items</p>
              </div>

              <div className="col-6">
                <p>${paymentSummary.items}</p>
              </div><hr />
            </div>

            <div className="row">
              <div className="col-6">
                <p>Shipping</p>
              </div>

              <div className="col-6">
                <p>${paymentSummary.shipping}</p>
              </div><hr />
            </div>

            <div className="row">
              <div className="col-6">
                <p>Tax</p>
              </div>

              <div className="col-6">
                <p>${paymentSummary.tax}</p>
              </div><hr />
            </div>

            <div className="row">
              <div className="col-6">
                <p><strong>Order Total</strong></p>
              </div>

              <div className="col-6">
                <p><strong>${paymentSummary.total}</strong></p>
              </div><hr />
            </div>

            <div>
              <PayPalScriptProvider options={{"client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID}`}}>
                <PayPalButtons
                  forceReRender={[amount]} 
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amount,
                            },
                              },
                            ],
                        })
                  }}
                  onApprove={(data, actions)=>{
                    return actions.order.capture().then(function (details){
                      saveOrderHistory();
                      localStorage.removeItem('shippingDetails');
                      setpaymentSummary('');
                      alert("Transaction completed by " + details.payer.name.given_name);
                    })
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment