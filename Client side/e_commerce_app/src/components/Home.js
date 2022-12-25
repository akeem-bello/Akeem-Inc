import React, {useState} from 'react';
import axios from 'axios';

const Home = ()=>{
    const url = 'http://localhost:4000/users/home';
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
                {product.map((product)=>{
                    <div className="col-4" style={firstDivStyle}>
                        <img src={product.productImage} alt='image'/>
                        <div style={homeDivStyle}>{product.productName}</div>
                        <div style={homeDivStyle}>{product.productPrice}</div>
                        <button className='btn btn-primary'>Add to Cart</button>
                    </div>
                })}
                    
            </div>
        </div>


        {/* <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/934348/1.jpg?6691"/>
                    <div style={homeDivStyle}>Mama'S Pride Nigerian Parboiled Rice 25kg</div>
                    <div style={homeDivStyle}>#15,960</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/5327121/1.jpg?6129"/>
                    <div style={homeDivStyle}>Samsung 98" Neo QLED 4K Smart TV - QN90A (2021)</div>
                    <div style={homeDivStyle}>#9,400,000</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/519617/1.jpg?5380"/>
                    <div style={homeDivStyle}>SONY PLAYSTATON PLAY STATION 5</div>
                    <div style={homeDivStyle}>#525,500</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/561686/1.jpg?4497"/>
                    <div style={homeDivStyle}>Samsung Q90R Dolby Atmos 512W Soundbar-Spotify & Alexa Connect</div>
                    <div style={homeDivStyle}>#1,500,000</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/4402611/1.jpg?3430"/>
                    <div style={homeDivStyle}>Giorgio Armani Acqua Di Gio Profumo EDP 125ml For Men</div>
                    <div style={homeDivStyle}>#92,999</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/814101/1.jpg?7297"/>
                    <div style={homeDivStyle}>Haier Thermocool Chest Freezer HTF-200H-White (Energy Saving 40%)</div>
                    <div style={homeDivStyle}>#177,480</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/881308/1.jpg?3914"/>
                    <div style={homeDivStyle}>Converse Chuck Taylor Digital Terrain All Star High Top Sneakers</div>
                    <div style={homeDivStyle}>#41,500</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/257805/1.jpg?2972"/>
                    <div style={homeDivStyle}>Jones Wears Marshmello Printed Hoodie Black</div>
                    <div style={homeDivStyle}>#12,000</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>

                <div className="col-4" style={firstDivStyle}>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/243597/1.jpg?2972"/>
                    <div style={homeDivStyle}>Adidas SPORTS PERFORMANCE OWN THE RUN TGT TIGHTS</div>
                    <div style={homeDivStyle}>#33,320</div>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div> */}
    </>
  )
}

export default Home