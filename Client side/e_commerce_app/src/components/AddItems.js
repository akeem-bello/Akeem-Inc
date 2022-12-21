import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddItems = ()=> {
    const navigate = useNavigate();
    const [productImage, setproductImage] = useState('');
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [message, setmessage] = useState('');
    const url = 'http://localhost:4000/users/admin/add-items';

    const addItem = ()=>{
        const itemDetails = {
            productImage,
            productName,
            productPrice
        };
        axios.post(itemDetails, url).then((res)=>{
            setmessage(res.data.message)
        });
        setproductImage('');
        setproductName('');
        setproductPrice('');
    }

    const logOut = ()=>{
        navigate('/admin')
    }
    let divStyle = {
        padding: '0% 20%'
    }
  return (
    <>
        <div className="container mt-5">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5">
                    <h3 className='text-center mb-3'>Add Product</h3>
                    <div className="text-center">{message}</div>
                    <input type="text" className='form-control my-2' placeholder='Product Image' value={productImage} onChange={(e)=>setproductImage(e.target.value)}/>
                    <input type="text" className='form-control my-2' placeholder='Product Name' value={productName} onChange={(e)=>setproductName(e.target.value)}/>
                    <input type="text" className='form-control my-2' placeholder='Product Price' value={productPrice} onChange={(e)=>setproductPrice(e.target.value)}/>
                    <button className='btn btn-success my-2 w-100' onClick={addItem} type='submit'>Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddItems