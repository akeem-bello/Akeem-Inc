import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Cart = ()=>{
  const [qty, setqty] = useState(1);
  const [cart, setcart] = useState([]);

  let orderTotal = 745 * qty;

  const increaseQty = ()=>{
    setqty(qty + 1);
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
    marginBottom: '80px',
    backgroundColor: '#83EFE2'
  }

  return (
    <>
      <div className="container" style={contStyle}>
        {/* {cart.length === 0 ? */}
          <div className="row bg-success p-5" style={styleOne}>
            <div className="col-4" style={styleTwo}>
              <img src="https://res.cloudinary.com/akeem/image/upload/v1673745784/Akeem%20Inc/3081986_rkzzn8.png" width={'50%'}/>
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
          {/* : */}
          
          <div style={styleThree}>
              <div style={styleFour}>
                <div>
                  <h5>Cart</h5>
                </div>

                <div className="row"><hr />
                  <div className="col-3">
                    <img src="https://res.cloudinary.com/akeem/image/upload/v1671499375/Akeem%20Inc/1_mkgndm.jpg" width={'50%'}/>
                  </div>

                  <div className="col-4">
                    <p>SONY PlayStation 5 Console - Digital Edition [Model 3006649]</p>
                  </div>

                  <div className="col-3">
                    <div>
                      <h5>$745</h5>
                    </div><br />
                    
                    <div>
                      <button className='btn' onClick={decreaseQty}><i className="fa-solid fa-minus-circle"></i></button> {qty} <button className='btn' onClick={increaseQty}><i className="fas fa-plus-circle"></i></button>
                    </div>
                  </div>
                </div>
                
                  <div className='mt-3'>
                    <button className='btn btn-sm btn-danger'><i className="fa-solid fa-trash"></i> REMOVE</button>
                  </div>  
              </div>

              <div style={styleFive}>
                <div>
                  <h6>CART SUMMARY</h6>
                </div>

                <div className="row"><hr />
                  <div className="col-6">
                    <h6>Subtotal</h6>
                  </div>

                  <div className="col-6">
                    <h5>${orderTotal}</h5>
                  </div><hr />
                </div>

                <div>
                  <button className='btn btn-dark w-100'>Checkout</button>
                </div>
              </div>
            </div>
{/* } */}
        </div>          
    </>
  )
}

export default Cart