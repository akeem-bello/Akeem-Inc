import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = ()=>{
  const url = 'http://localhost:4000/users/cart';
  const token = localStorage.token;
  const navigate = useNavigate();
  const [qty, setqty] = useState(1);
  const [cart, setcart] = useState([]);
  useEffect(() => {
    axios.get(url).then((res)=>{
      setcart(res.data.cart);
    })
  }, [])

  // const deleteItem = ()=>{
  //   const url = 'http://localhost:4000/users/cart';
  //   let currentItem = cart._id
  //   axios.post(url, currentItem);
  // }

  const saveOrderDetails = ()=>{
    const url = 'http://localhost:4000/users/payment';
    const orderDetails = {
      productsTotal: itemsTotal,
      orderTax: tax,
      orderShipping: shipping,
      orderTotal: orderTotal
    };
    axios.post(url, orderDetails);
  }

  const checkout = ()=>{
    if(token){
      navigate('/shipping');
    }else{
      navigate('/signin');
    }
    saveOrderDetails();
  }

  let itemsTotal = 0;
  for(let i = 0; i < cart.length; i++){
    itemsTotal += cart[i].itemPrice; 
  }

  let tax = itemsTotal * 0.05;

  let shipping = itemsTotal * 0.01;

  let orderTotal = itemsTotal + tax + shipping;

  const increaseQty = ()=>{
      if(cart.filter((index)=>(index = cart._id))){
        setqty(qty + 1);
    }
    
  }

  const decreaseQty = ()=>{
    {qty === 1 ? setqty(qty) : setqty(qty - 1)};
  }
  
  let contStyle = {
    marginTop: '40px',
    marginBottom: '75px'
}

  let styleOne = {
    padding: '0% 10%'
  }

  let styleTwo = {
    marginRight: '-80px'
  }

  let styleThree = {
    display: 'flex',
    marginTop: '20px'
  }

  let styleFour = {
    width: '75%',
    padding: '20px',
    marginRight: '40px',
    backgroundColor: '#DAE0E9'
  }

  let styleFive = {
    width: '25%',
    padding: '10px',
    height: '100%',
    backgroundColor: '#83EFE2'
  }

  return (
    <>
      <div className="container" style={contStyle}>
        {cart.length === 0 ?
          <div className="row bg-success p-5" style={styleOne}>
            <div className="col-4" style={styleTwo}>
              <img src="https://res.cloudinary.com/akeem/image/upload/v1673745784/Akeem%20Inc/3081986_rkzzn8.png" width={'50%'} alt=''/>
            </div>

            <div className="col-6">
              <div>
                <h3 className='mt-4'>Your Akeem Inc. Cart is empty</h3>
              </div>

              <div>
                <Link to='/'>
                  <p>Shop today's deals</p>
                </Link>
              </div>
            </div>
          </div> 
          :
          
          <div style={styleThree}>
              <div style={styleFour}>
              {cart.map((cartItem, index)=>(
                <div className="row mb-3" key={index}><hr />
                  <div className="col-3">
                    <img src={cartItem.itemImage} width={'75%'} alt={cartItem.itemName}/>
                  </div>

                  <div className="col-4">
                    <p>{cartItem.itemName}</p>
                  </div>

                  <div className="col-3">
                    <div className='text-center'>
                      <p>{cartItem.itemPrice * qty}</p>
                    </div><br />
                    
                    <div className='text-center'>
                      <button className='btn' onClick={decreaseQty}><i className="fa-solid fa-minus-circle"></i></button> {qty} <button className='btn' onClick={()=>increaseQty(index)} disabled={qty === cartItem.itemCount}><i className="fas fa-plus-circle"></i></button>
                    </div>

                    <div className='mt-3 mb-3 text-center'>
                    <button className='btn btn-sm btn-secondary'><i className="fa-solid fa-trash"></i> Remove</button>
                  </div> 
                  </div>
                </div> 
                 ))}
              </div>
               
              <div style={styleFive}>
                <div className='text-center'>
                  <h5><strong>CART SUMMARY</strong></h5>
                </div>

                <div className="row"><hr />
                  <div className="col-6">
                    <h6><strong>Items</strong></h6>
                  </div>

                  <div className="col-6">
                    <h6><strong>${itemsTotal}</strong></h6>
                  </div><hr />
                </div>

                <div className="row">
                  <div className="col-6">
                    <h6><strong>Shipping</strong></h6>
                  </div>

                  <div className="col-6">
                    <h6><strong>${shipping.toFixed(2)}</strong></h6>
                  </div><hr />
                </div>

                <div className="row">
                  <div className="col-6">
                    <h6><strong>Tax</strong></h6>
                  </div>

                  <div className="col-6">
                    <h6><strong>${tax.toFixed(2)}</strong></h6>
                  </div><hr />
                </div>

                <div className="row">
                  <div className="col-6">
                    <h6><strong>Order Total</strong></h6>
                  </div>

                  <div className="col-6">
                    <h6><strong>${orderTotal.toFixed(2)}</strong></h6>
                  </div><hr />
                </div>

                <div>
                  <button className='btn btn-dark w-100' onClick={checkout}>Checkout</button>
                </div>
              </div>
            </div>
}
        </div>          
    </>
  )
}

export default Cart