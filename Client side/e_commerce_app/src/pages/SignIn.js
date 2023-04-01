import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {divStyle, anchorStyle, contStyle} from '../resources/signinStyles'

const Account = ()=>{
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [message, setmessage] = useState('')
  const navigate = useNavigate()
  const url = 'http://localhost:4000/users/signin'

  const signIn = ()=>{
    const currentUser = {email, password};
    axios.post(url, currentUser).then((res)=>{
      setmessage(res.data.message);
      localStorage.token = res.data.token;
      if(res.data.status){
        navigate('/shipping')
      }
    })
  }
    
  return (
    <>
        <div className="container" style={contStyle}>
           <div className="row" style={divStyle}>
               <div className="col-7 mx-auto mt-5 shadow p-4">
                   <h3 className='text-center mb-3'>Sign-In</h3>
                   <div className='text-center'>{message}</div>
                      <input className='form form-control my-2' type="text" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                      <input className='form form-control my-2' type="text" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                      <button type='submit' className='btn btn-primary my-2 w-100' onClick={signIn}>Sign In</button> 
                   <div className='mt-2'><p>By continuing, you agree to Akeem Inc.'s <u>Conditions of Use</u> and <u>Privacy Notice.</u></p></div>
               </div>
               <div className='col-7 mx-auto mt-5 shadow p-5'>
                  <div className="row">
                    <div className="col-3"><hr /></div>
                    <div className="col-6 text-center"><p>New to Akeem Inc.?</p> </div>
                    <div className="col-3"><hr /></div>
                  </div>
                   <button className='btn btn-dark w-100'><Link to='/signup' style={anchorStyle}>Create an Account</Link></button>
               </div>                  
           </div>
        </div> 
    </>
  )
}

export default Account