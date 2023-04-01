import React from 'react';
import {pStyle} from '../resources/footerStyles';

const Footer = ()=> {
    
  return (
    <>
        <footer style={{padding:'1% 15%', background: '#212529'}}>
            <div className="row">
                <div className="col-6">
                    <img src="9bdab42795d64d0697426dcbc1a841d6.png" alt="logo" width={'8%'}/>
                    <p style={pStyle}>© 2023. All Rights Reserved. Developed By AkeemBello</p>
                </div>
                <div className="col-6">
                    <p style={pStyle}><i className="fa-solid fa-phone"></i> +1 (587) 575-2039</p>
                    <p style={pStyle}><i className="fa-solid fa-envelope"></i> belloakeem07@gmail.com</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer