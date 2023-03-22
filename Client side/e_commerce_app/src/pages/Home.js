import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const Home = ()=>{
    const url = 'http://localhost:4000/users/';
    const [allProducts, setallProducts] = useState([]);
    useEffect(() => {
      axios.get(url).then((res)=>{
        setallProducts(res.data.products);
    })
    }, []);
    
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
                {allProducts.map((product, index)=>(
                    <div className="col-4" style={firstDivStyle} key={index}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.productImage} alt={product.productName}/>
                        </Link>

                        <Link to={`/product/${product._id}`}>
                            <div style={homeDivStyle}><p>{product.productName}</p></div>
                        </Link>

                        <div className='mb-2'>
                          <Rating rating={product.productRating} />
                        </div>
                        
                        <div style={homeDivStyle}><p><strong>${product.productPrice}</strong></p></div>
                    </div>
                ))}
                    
            </div>
        </div>
    </>
  )
}

export default Home