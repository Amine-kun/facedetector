import React from 'react';

class Register extends React.Component {
		constructor(props){
		super(props);
		this.state={
			email:'',
			password:'',
			name:'',
		}
	}
componentDidMount() {
    // document.body.style.overflow = 'hidden';
    document.body.style.background = '#1e2833 url(https://10minemail.com/js/images/header-bg.jpg) repeat 0 0';
}


		registerationName = (event) =>{
			this.setState({name: event.target.value})
		}
		registerationEmail = (event) =>{
			this.setState({email: event.target.value})
		}
		registerationPassword = (event) =>{
			this.setState({password: event.target.value})
		}
 

		onSubmitRegister = () =>{
		fetch('http://localhost:3001/register',{
			method:'post',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('signin');
			}
			else {
				console.log('no user');
				const element = document.getElementById("incorrect");
				 element.classList.remove("inv");

			}
		})

	}

		render() {
			return (

		<div>

		    <section id ="home" className="login-dark home">
        				<p className="ktaba">Try it for Free!!</p> 
				        <p className="ktaba2">Face Recongnition WEB APP</p>
				            <p className="ktaba3">A simple, </p>
				            <p className="ktaba4">Yet a good application, </p>
				            <p className="ktaba5">For Detecting faces.</p>
        <div className="form">
            <h2 className="visually-hidden">registration Form</h2>
            <div className="illustration">
                <i className="icon ion-ios-locked-outline"></i>
            </div>
            <p className="incorrect inv" id="incorrect">Enter Valid Credentials</p>
            <div className="mb-3">
                <input 
                className="form-control" 
                type="text" name="name" 
                placeholder="Username"
                onChange={this.registerationName}
                />
            </div>
            <div className="mb-3">
                <input 
                className="form-control" 
                type="email" name="email" 
                placeholder="Email"
                onChange={this.registerationEmail}
                />
            </div>
            <div className="mb-3">
                <input 
                className="form-control" 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={this.registerationPassword}
                />
            </div>
            <div className="mb-3">
                <button 
                className="btn btn-primary d-block w-100" 
                type="button"
                onClick={this.onSubmitRegister}
                >
                Submit
                </button>
                <button 
                className="btn btn-primary d-block w-100" 
                type="button"
                onClick={()=> this.props.onRouteChange('signin')}
                >
                Cancel
                </button>
            </div>
            <p className="forgot">
                Already have an account ?  
                <button className="sign ml1" onClick={()=> this.props.onRouteChange('signin')}>
                    Signin
                </button>
            </p>
        </div>
    </section>

		</div>
	);



	// return (
	// 	<div>
	// 	<main className="mt5 pa4 ">
	// 	 <form className="measure center ">
	// 		    <fieldset id="sign_up" className="ba1 b--transparent ph0 mh0">
	// 		      <legend className="f3 fw6 ph0 mh0 ">Register</legend>
	// 		  <div className="mt3">
	// 		        <label className="db fw6 lh-copy f6 fl" htmlFor="name">Name</label>
	// 		        <input 
	// 		        className="pa2 input-reset ba1 bg-transparent hoverc htc w-100" 
	// 		        type="text" 
	// 		        name="Name"  
	// 		        id="Name"
	// 		        onChange={this.registerationName}
	// 		        />
	// 		  </div>
	// 		 <div className="mt3">
	// 		        <label className="db fw6 lh-copy f6 fl" htmlFor="email-address">Email</label>
	// 		        <input className="pa2 input-reset ba1 bg-transparent hoverc htc w-100" 
	// 		        type="email" 
	// 		        name="email-address"  
	// 		        id="email-address"
	// 		        onChange={this.registerationEmail}
	// 		        />
	// 		  </div>
	// 		  <div className="mv3">
	// 		        <label className="db fw6 lh-copy f6 fl" htmlFor="password">Password</label>
	// 		        <input className="b pa2 input-reset ba1 bg-transparent hoverc htc w-100"
	// 		         type="password" 
	// 		         name="password"  
	// 		         id="password"
	// 		         onChange={this.registerationPassword}
	// 		        />
	// 		  </div>
	// 		    </fieldset>
	// 		    <div className="p2">
	// 		      <input 
	// 		      onClick={this.onSubmitRegister}
	// 		      className="b  ph3 pv2 input-reset ba1 b--black hoverc htc bg-transparent grow pointer f6 dib" 
	// 		      type="button" 
	// 		      value="Check" />

	// 		      <input 
	// 		       onClick={()=> this.props.onRouteChange('signin')}
	// 		      style={{margin:"0 0 0 20px"}}
	// 		      className="b  ph3 pv2 input-reset ba1 b--black hoverc htc bg-transparent grow pointer f6 dib" 
	// 		      type="button" 
	// 		      value="cancel" />
	// 		   </div>

	//      </form>
	// 	</main>

	// 	</div>
	// );
} } 


export default Register;