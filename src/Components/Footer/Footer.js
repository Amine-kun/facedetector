import React from 'react';
import './Footer.css';
// import logo from './logo.png';

const Footer = () => {
	return (
		<div style={{background: '#212329 url(https://10minemail.com/js/images/header-bg.jpg) repeat 0 0', height:'100px'}}>
			<div className='divy'>
			{/*<img alt="xx" src={logo}/>*/}
			<p className='state'>This website made for learning purposes.</p>
			</div>		
		</div>
	);
}


export default Footer;