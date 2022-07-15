import React from 'react';
import './style/Signin.css';
import './style/Login-Form-Dark.css';
import './style/bootstrap.min.css';
import './style/ionicons.min.css'
import vector from './style/Landingimg.png';

class Signin extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:'',
			route:'',

		}
	}

componentDidMount() {
    document.body.style.background = '#1e2833 url(https://10minemail.com/js/images/header-bg.jpg) repeat 0 0';
}

componentWillUnmount() {
    document.body.style.background = '#e9e9e9';
}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}
	onSubmitSignIn = () =>{
		fetch('https://lit-caverns-20576.herokuapp.com/signin',{
			method:'post',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
			else {
				console.log('no user');
				const element = document.getElementById("incorrect");
				 element.classList.remove("inv");

			}
		})

	}
		 onEnter = (event) => {
		    if (event.key === 'Enter') {
		      this.onSubmitSignIn();
		    }
		  };

		 SetAndGo = () =>{
		 	const guestEmail = 'guest@gmail.com';
		 	const guestPassword = 'guest';
				fetch('https://lit-caverns-20576.herokuapp.com/signin',{
							method:'post',
							headers:{'Content-Type': 'application/json'},
							body: JSON.stringify({
								email: guestEmail,
								password: guestPassword
							})
						})
			.then(response => response.json())
		.then(user => {
			if (user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
			else {
			console.log("guest isnt working");

			}
		})
		 }

	render(){
	return (
		<div>

		    <section id ="home" className="login-dark home">
				            	<img className="vector"	alt="" src={vector}/>
						        <div className="form">
						            <h2 className="visually-hidden">Login Form</h2>
						            <div className="illustration">
						                <i className="icon ion-ios-locked-outline"></i>
						            </div>
						            <p className="incorrect inv" id="incorrect">Incorrect Email or Password</p>
						            <div className="mb-3">
						                <input 
						                className="form-control" 
						                type="email" name="email" 
						                placeholder="Email"
						                onChange={this.onEmailChange}

						                />
						            </div>
						            <div className="mb-3">
						                <input 
						                className="form-control" 
						                type="password" 
						                name="password" 
						                placeholder="Password"
						                onChange={this.onPasswordChange}
						                 onKeyPress={this.onEnter}
						                />
						            </div>
						            <div className="mb-3">
						                <button 
						                type="button"
						                className="btn btn-primary d-block w-100" 
						                onClick={this.onSubmitSignIn}
						                >
						                Log In
						                </button>
						            </div>
						            <p className="forgot">
						                New here ?  
						                <button className="sign ml1" onClick={()=> this.props.onRouteChange('register')}>
						                    Sign up
						                </button>
						            </p>
						            <p className="forgot pointer" onClick={this.SetAndGo}  > Or continue as a guest! :D </p>
						        </div>
   			 </section>
		</div>
	);
}
}

export default Signin;

