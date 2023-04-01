import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import {divStyle, inpStyle, labelStyle, headStyle, colStyle, btnStyle} from '../resources/shippingStyles'

function Shipping() {
  const url = 'http://localhost:4000/users/shipping';
  const navigate = useNavigate();
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
      console.log(res.data.result)
      if(!res.data.status){
          localStorage.removeItem('token')
          navigate('/signin')
      }
    })
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      country: ''
    },
    
    onSubmit: (values)=>{
      const shippingDetails = {
        fullName: values.fullName,
        phoneNumber: values.phoneNumber,
        address: values.address,
        city: values.city,
        province: values.province,
        postalCode: values.postalCode,
        country: values.country
      };
      localStorage.setItem('shippingDetails', JSON.stringify(shippingDetails));
      navigate('/payment');
    },
    validate: (values)=>{
      let errors = {};
      let regexForFullName = /^([a-zA-z]+)([\s])?/;
      let regexForAddress = /^([\w]+)([\s])?/;
      let regexForCity = /^([a-zA-z]+)$/;
      let regexForPhonenumber = /^[\d]{10}$/;
      let regexForPostalCode = /^([\w]+)$/;
      let regexForCountry = /^([a-zA-z]+)$/;
      if(!values.fullName){
          errors.fullName = 'This field is required'
      }else if(!regexForFullName.test(values.fullName)){
          errors.fullName = 'This field can only contain letters'
      }
      if(!values.address){
          errors.address = 'This field is required'
      }else if(!regexForAddress.test(values.address)){
          errors.address = 'This field can only contain letters and commas'
      }
      if(!values.city){
          errors.city = 'This field is required'
      }else if(!regexForCity.test(values.city)){
          errors.city = 'This field can only contain letters'
      }
      if(!values.province){
          errors.province = 'This field is required'
      }
      if(!values.phoneNumber){
          errors.phoneNumber = 'This field is required'
      }else if(!regexForPhonenumber.test(values.phoneNumber)){
          errors.phoneNumber = 'Phone number must be 10 digits'
      }
      if(!values.postalCode){
          errors.postalCode = 'This field is required'
      }else if(!regexForPostalCode.test(values.postalCode)){
          errors.postalCode = "This field can not contain any special characters"
      }
      if(!values.country){
        errors.country = 'This field is required'
    }else if(!regexForCountry.test(values.country)){
        errors.country = 'This field can only contain letters'
    }
      return errors
    }
  })

  return (
    <>
      <div className="container">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5 mb-5 mt-5" style={colStyle}>
                    <h6 className='mb-4'>Hello, {user.firstName}!</h6>
                    <h3 className='text-center' style={headStyle}>Shipping Address</h3>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label style={labelStyle}><strong>Full Name</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='fullName' style={inpStyle}/>
                        {formik.touched.fullName ? <div className='text-danger'>{formik.errors.fullName}</div> : ''}

                        <label style={labelStyle}><strong>Phone Number</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='phoneNumber'/>
                        {formik.touched.phoneNumber ? <div className='text-danger'>{formik.errors.phoneNumber}</div> : ''}

                        <label style={labelStyle}><strong>Address</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='address'/>
                        {formik.touched.address ? <div className='text-danger'>{formik.errors.address}</div> : ''}

                        <label style={labelStyle}><strong>City</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='city'/>
                        {formik.touched.city ? <div className='text-danger'>{formik.errors.city}</div> : ''}

                        <select className='w-100' style={labelStyle} onChange={formik.handleChange} onBlur={formik.handleBlur} name='province'>
                            <option disabled>Province</option>
                            <option value="Alberta">Alberta</option>
                            <option value='British Columbia'>British Columbia</option>
                            <option value='Manitoba'>Manitoba</option>
                            <option value='New Brunswick'>New Brunswick</option>
                            <option value='Newfoundland and Labrador'>Newfoundland and Labrador</option>
                            <option value='Nova Scotia'>Nova Scotia</option>
                            <option value='Ontario'>Ontario</option>
                            <option value='Saskatchewan'>Saskatchewan</option>
                        </select>
                        {formik.touched.province ? <div className='text-danger'>{formik.errors.province}</div> : ''}

                        <label style={labelStyle}><strong>Postal Code</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='postalCode'/>
                        {formik.touched.postalCode ? <div className='text-danger'>{formik.errors.postalCode}</div> : ''}

                        <label style={labelStyle}><strong>Country</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='country'/>
                        {formik.touched.country ? <div className='text-danger'>{formik.errors.country}</div> : ''}
                        
                        <button type='submit' className='btn mt-4 w-100 p-2 justify-center bg-dark' style={btnStyle}>Continue</button>
                    </form>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Shipping