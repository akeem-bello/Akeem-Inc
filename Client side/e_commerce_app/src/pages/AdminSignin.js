import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {divStyle, colStyle, headStyle, labelStyle, btnStyle, inpStyle} from '../resources/adminSigninStyles'

const AdminSignin = ()=> {
    const url = 'http://localhost:4000/users/admin-signin';
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');

    const signIn = ()=>{
        const adminDetails = {email, password};
        axios.post(url, adminDetails).then((res)=>{
          setmessage(res.data.message);
          localStorage.token2 = res.data.token2;
          if(res.data.status){
            navigate('/admin/add-items')
          }
        })
    }
    
  return (
    <div>
        <div className="container" style={{marginBottom: '105px'}}>
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5 mb-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Admin Sign In</h3>
                    <div className='text-center'>{message}</div>

                    <label style={labelStyle}><strong>Email</strong></label>
                    <input type="text" className='form-control my-2' value={email} onChange={(e)=>setemail(e.target.value)} style={inpStyle}/>

                    <label style={labelStyle}><strong>Password</strong></label>
                    <input style={inpStyle} type="text" className='form-control my-2' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    
                    <button className='btn mt-4 w-100 p-2 justify-center' style={btnStyle} onClick={signIn}>Sign In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSignin