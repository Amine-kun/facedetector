import React from 'react';
import './Header-Dark.css';
import './bootstrap.min.css';
import './Navonsign.css';

const Navonsign = ({refreshPage, onRouteChange, route}) => {
	if (route === 'signin'){
	return (
		<div className="divbody">
			<div className="header-dark">
		        <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
		            <div className="container">
		                <p className="link pointer navbar-brand logo" onClick={refreshPage}><span className="Facetoblue">Face</span> Recognition</p>
		                <div className="collapse navbar-collapse" id="navcol-1">
		                    <ul className="navbar-nav">
		                        <li className="nav-item">
		                            <p 
			                            className="register nav-link pointer brd"
			                            onClick={()=> onRouteChange('Register')}>CREATE ACCOUNT!
		                            </p>
		                        </li>
		                    </ul>

		                </div>
		            </div>
		        </nav>
		    </div>
		</div>); } 
		else {
			return (
		<div className="divbody">
			<div className="header-dark">
		        <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
		            <div className="container">
		                <p className="link pointer navbar-brand" onClick={refreshPage}><span className="Facetoblue">Face</span> Recognition</p>
		                    <ul className="navbar-nav">
		                        <li className="nav-item">
		                            <p className="nav-link pointer" href="#">Link</p>
		                        </li>
		                    </ul>
		            </div>
		        </nav>
		    </div>
		</div>);
		}
		} 


export default Navonsign;