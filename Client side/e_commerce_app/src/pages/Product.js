import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Rating from '../components/Rating';

const Product = ()=>{
    const {_id} = useParams();
    const url = `http://localhost:4000/users/product/${_id}`;
    const [product, setproduct] = useState('');
    useEffect(() => {
      axios.get(url).then((res)=>{
        setproduct(res.data.result);
    })
    }, []);

  const addToCart = ()=>{
    const url = 'http://localhost:4000/users/cart';
    const itemDetails = {
      itemImage: product.productImage,
      itemName: product.productName,
      itemPrice: product.productPrice
    };
    axios.post(url, itemDetails);
  }
  
  let contStyle = {
      marginTop: '60px',
      marginBottom: '75px'
  }

  let styleOne = {
    display: 'flex',
    marginTop: '20px'
  }

  let styleTwo = {
    width: '50%',
    marginLeft: '200px',
  }

  let styleThree = {
    width: '25%'
  }

  return (
    <div>
        <div className="container" style={contStyle}>
          <div style={styleOne}>
            <div style={styleTwo}>
              <img src={product.productImage} alt={product.productName} />
            </div>

            <div style={styleThree}>
              <div className="row">
                <div className="col-7">
                  <h6>
                    {product.productName}
                  </h6>
                </div>

                <div className="col-7">
                  <Rating rating={product.productRating} />
                </div>
              </div>
            </div>

            <div style={styleThree}>
              <div className="row">
                <div className="col-7">
                  <p>
                    ${product.productPrice}
                  </p>
                </div>

                <div className="col-7">
                  <p>
                    {product.productCount > 0 ?
                      <span className='badge bg-success'>In Stock</span> :
                      <span className='badge bg-danger'>Out of Stock</span>
                  }
                  </p>
                </div>

                <div className="col-7">
                  {product.productCount > 0 && 
                  <button className='btn btn-primary' onClick={addToCart}>Add to Cart</button> } 
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product