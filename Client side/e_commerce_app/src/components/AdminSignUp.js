import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminSignUp = ()=> {
    const url = 'http://localhost:4000/users/admin-signup';
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');
    const navigate = useNavigate();

    const signUp = ()=>{
        const adminDetails = {name, email, password};
        axios.post(url, adminDetails).then((res)=>{
            setmessage(res.data.message);
            if(res.data.status){
                navigate('/admin-signin');
            }
        });
        setname('');
        setemail('');
        setpassword('');
    }

    let divStyle = {
        padding: '0% 20%'
    }
  return (
    <>
        <div className="container mt-5">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5">
                    <h3 className='text-center mb-4'>Admin Sign Up</h3>
                    <div className='text-center'>{message}</div>
                    <form action="">
                        <input type="text" className='form-control my-2' placeholder='Name'/>
                        <input type="text" className='form-control my-2' placeholder='Email'/>
                        <input type="text" className='form-control my-2' placeholder='Password'/>
                        <button type='submit' className='btn btn-success w-100 mt-3' onClick={signUp}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminSignUp