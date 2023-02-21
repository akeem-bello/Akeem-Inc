import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = ()=>{
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('')
    const url = 'http://localhost:4000/users/signup'

    const signUp = ()=>{
        const userDetails = {firstName, lastName, email, password};
        axios.post(url, userDetails).then((res)=>{
            setmessage(res.data.message);
            if(res.data.status){
              navigate('/signin');
            }
        })
        setfirstName('');
        setlastName('');
        setemail('');
        setpassword('');
      }

    let divStyle = {
        padding: '0% 20%'
    }

    let contStyle = {
      marginTop: '60px',
      marginBottom: '80px'
  }
  return (
    <>
       <div style={contStyle} className='container'>
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5">
                    <h3 className='text-center mb-3'>Create account</h3>
                    <div className="text-center">{message}</div>
                    <input type="text" className='form-control my-2' placeholder='First Name' value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                    <input type="text" className='form-control my-2' placeholder='Last Name' value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                    <input type="text" className='form-control my-2' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <input type="text" className='form-control my-2' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <button className='btn btn-success my-2 w-100' onClick={signUp} type='submit'>Sign Up</button>
                    <p className='mt-3'>By creating an account, you agree to Akeem Inc.'s <u>Conditions of Use</u> and <u>Privacy Notice.</u></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp