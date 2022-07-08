import React from 'react';
import './Linkbar.css'

const Linkbar = ({onInputChange, onButtonClick, onEnter}) => {
	return (
		<div style={{background: '#212329 url(https://10minemail.com/js/images/header-bg.jpg) repeat 0 0', height:'130px',}}>
			<div style={{display:'flex' , justifyContent:'center', width:''}}>
				<input
				 placeholder="Type here..." 
				 style={{width:'47%', borderRadius:'30px', border:'0', height:'60px', paddingLeft:'20px',paddingRight:'120px' }} 
				 type='text' 
				 onKeyPress={onEnter}
				 onChange={onInputChange}/>
				<button 
				className='hvr'
				onClick={onButtonClick}>Detect</button>
			</div>
		</div>
	);
}


export default Linkbar;