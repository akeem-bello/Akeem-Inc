import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const url = 'http://localhost:4000/users/dashboard';
    const navigate = useNavigate();
    const [history, sethistory] = useState([]);

    useEffect(() => {
      axios.get(url).then((res)=>{
        sethistory(res.data.history);
      })
    }, [])

    const logOut = ()=>{
        localStorage.removeItem('token');
        navigate('/');
    }
    
  return (
    <div className='container my-5'>
        <button className='btn btn-dark' style={{color: '#0D6EFD'}} onClick={logOut}>Sign Out</button>
        <h2 className='text-center mb-5'>Order History</h2>
        <table className='table'>
            <tr>
                <th>S/N</th>
                <th>SHIPPING DETAILS</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>ORDER ID</th>
            </tr>
            {history.map((history, index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>
                        <div>{history.shippingName}</div>
                        <div>{history.shippingTelNumber}</div>
                        <div>{history.shippingAddress}</div>
                    </td>
                    <td>{history.createdAt}</td>
                    <td>${history.orderTotal}</td>
                    <td>{history._id}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Dashboard