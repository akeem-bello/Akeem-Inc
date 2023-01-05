import React, {useState} from 'react';
import axios from 'axios';

const Home = ()=>{
    const url = 'http://localhost:4000/users/';
    const [product, setproduct] = useState([]);
    axios.get(url).then((res)=>{
        setproduct(res.data.products);
    })

  let homeDivStyle ={
    fontSize: '13px',
    marginBottom: '20px',
}

let firstDivStyle ={
    padding: '6% 10%'
}
    
  return (
    <>
        <div className="container">
          <div className="row">
                <div className="col-7 mx-auto text-center">
                    <div className="my-2"><h1>Welcome to</h1></div> 
                    <div className="div"><img src="9bdab42795d64d0697426dcbc1a841d6.png" alt='logo'/></div>
                </div>
          </div>

            <div className="row">
                {product.map((product)=>(
                    <div className="col-4" style={firstDivStyle}>
                        <img src={product.productImage} alt='image'/>
                        <div style={homeDivStyle}>{product.productName}</div>
                        <div style={homeDivStyle}>${product.productPrice}</div>
                        <button className='btn btn-primary'>Add to Cart</button>
                    </div>
                ))}
                    
            </div>
        </div>
    </>
  )
}

export default Home