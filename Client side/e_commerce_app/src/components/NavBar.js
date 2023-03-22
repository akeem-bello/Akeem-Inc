import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavBar = ()=>{
    const url = 'http://localhost:4000/users/shipping';
    const [user, setuser] = useState('')
    const token = localStorage.token;
  
    useEffect(() => {
      axios.get(url, {
        headers:{
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}).then((res)=>{
        setuser(res.data.result);
      })
    }, []);

    let linkStyle ={
        marginRight: '40px',
        textDecoration: 'none'
    }

    let inpStyle = {
        borderRadius: '10px',
        marginRight: '10px'
    }

    let btnStyle = {
        marginRight: '40px',
        borderRadius: '10px',
        color: 'blue',
    }

  return (
    <div className="bg-dark">
        <div className="container text-center">
            <Link to='/'><img src="9bdab42795d64d0697426dcbc1a841d6.png" width={'5%'} style={linkStyle}/></Link> 
            <Link to='/' style={linkStyle}>Home</Link>
            <input className='w-25' type="text" placeholder=' Search products' style={inpStyle}/>
            <button className="btn-light" style={btnStyle}><i className="fa-solid fa-magnifying-glass"></i></button>
            <Link to='/signin' style={linkStyle}>Sign In</Link>
            {token ? <Link to='/dashboard' style={linkStyle}>Hi, {user.firstName}</Link> : ''}
            <Link to='/contact' style={linkStyle}>Contact</Link>
            <Link to='/cart' style={linkStyle}><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
        </div>
    </div>
  )
}

export default NavBar