import React from 'react';
import logo from './logo.png';
import './nav.css';

const Navigation = ({name, onRouteChange, refreshPage}) => {
	return (
		<div style={{height:'275px' , background: '#212329 url(https://10minemail.com/js/images/header-bg.jpg) repeat 0 0'}}>
			<div className='divnav' >
			<nav style={{display: 'flex' ,justifyContent :'flex-end' , paddingRight: '20px' }}>
				<p className='bttn link pointer db' onClick={()=> onRouteChange('signin')}>Sign Out</p>
			</nav>
			<p className="link pointer brand logox" onClick={refreshPage}><span className="Facetoblue">Face</span> Recognition</p>
			</div>
			<p style={{marginTop: '30px', color:'#e9e9e9', fontSize:'27px', fontWeight:'bold'}}>{`Welcome, ${name}`  }</p>	
			<p style={{marginTop: '20px', color:'#e9e9e9'}}>{'Put down a picture Link with faces to detect!'}</p>
		</div>
	);
}


export default Navigation;