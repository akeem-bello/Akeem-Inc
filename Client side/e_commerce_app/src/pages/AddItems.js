import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItems = ()=> {
    const navigate = useNavigate();
    const url = 'http://localhost:4000/users/admin/add-items';
    const token2 = localStorage.token2;
    const [productImage, setproductImage] = useState('');
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productRating, setproductRating] = useState('');
    const [productCount, setproductCount] = useState('');
    const [message, setmessage] = useState('');

    useEffect(() => {
        axios.get(url, {
          headers:{
          "Authorization": `Bearer ${token2}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        }}).then((res)=>{
          if(!res.data.status){
              localStorage.removeItem('token2')
              navigate('/admin-signin')
          }
        })
      }, []);

    const addItem = ()=>{
        const itemDetails = {
            productImage,
            productName,
            productPrice,
            productRating,
            productCount
        };
        axios.post(url, itemDetails).then((res)=>{
            setmessage(res.data.message);
            if(res.data.status){
                alert('Product added successfully.');
                setproductImage('');
                setproductName('');
                setproductPrice('');
                setproductRating('');
                setproductCount('');
            }else{
                alert('An error occured, please try again.')
            }
        });
    }

    const logOut = ()=>{
        localStorage.removeItem('token2');
        navigate('/admin-signin');
    }
   
  return (
    <>
        <div className="container mt-5" style={{marginBottom: '93px'}}>
            <button className='btn btn-secondary' onClick={logOut}>Log Out</button>
            <div className="row" style={{padding: '0% 20%'}}>
                <div className="col-7 mx-auto shadow p-5">
                    <h3 className='text-center mb-3'>Add Product</h3>

                    <div className="text-center">{message}</div>

                    <input type="text" className='form-control my-2' placeholder='Product Image' value={productImage} onChange={(e)=>setproductImage(e.target.value)}/>

                    <input type="text" className='form-control my-2' placeholder='Product Name' value={productName} onChange={(e)=>setproductName(e.target.value)}/>

                    <input type="text" className='form-control my-2' placeholder='Product Price' value={productPrice} onChange={(e)=>setproductPrice(e.target.value)}/>

                    <input type='text' className='form-control my-2' placeholder='Product Rating' value={productRating} onChange={(e)=>setproductRating(e.target.value)}/>

                    <input type="text" className='form-control my-2' placeholder='Product Count' value={productCount} onChange={(e)=>setproductCount(e.target.value)}/>

                    <button className='btn btn-success my-2 w-100' onClick={addItem}>Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddItems