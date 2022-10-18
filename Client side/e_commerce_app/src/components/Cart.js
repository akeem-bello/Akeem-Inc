import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ()=>{
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
      <div className="container mt-5">
            <div className="row bg-success p-5" style={styleOne}>
                <div className="col-4" style={styleTwo}><img src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" width={'50%'}/></div>
                <div className="col-6">
                  <div><h3 className='mt-4'>Your Akeem Inc. Cart is empty</h3></div>
                  <div><Link to='/'><p>Shop today's deals</p></Link></div>
                </div>
            </div>
            
            <div style={styleThree}>
              <div style={styleFour}>
                <div><h5>Cart()</h5></div>
                <div className="row"><hr />
                  <div className="col-3">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/934348/1.jpg?6691" width={'50%'}/>
                  </div>
                  <div className="col-4">
                    <p>Mama'S Pride Nigerian Parboiled Rice 25kg</p>
                  </div>
                  <div className="col-3">
                    <div><h5>#15,960</h5></div><br />
                    <div>
                    <button className='btn btn-dark btn-sm'><i className="fa-solid fa-minus"></i></button> 4 <button className='btn btn-dark btn-sm'><i className="fa-solid fa-plus"></i></button>
                  </div>
                  </div>
                </div>
                
                  <div className='mt-3'>
                    <button className='btn btn-sm btn-danger'><i className="fa-solid fa-trash"></i> REMOVE</button>
                  </div>
                
              </div>
              <div style={styleFive}>
                <div><h6>CART SUMMARY</h6></div>
                <div className="row"><hr />
                  <div className="col-6"><h6>Subtotal</h6></div>
                  <div className="col-6"><h5>#50,000</h5></div><hr />
                </div>
                <div><button className='btn btn-dark w-100'>CHECKOUT ()</button></div>
              </div>
            </div>
        </div>   
    </>
  )
}

export default Cart