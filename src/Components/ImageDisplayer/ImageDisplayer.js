import React from 'react';
import './disp.css';

const ImageDisplayer = ({imageUrl, box}) => {
	return (
		<div className='div1'>
			<div className='absolute mar mb2'>
				<img className='img1' id='inpimg'  alt='' src={imageUrl} />
				<div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}} ></div>
			</div>
		</div>
	);
}


export default ImageDisplayer;