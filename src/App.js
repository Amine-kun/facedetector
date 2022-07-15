import react, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';

import Navigation from './Components/Navigation/Navigation';
import Linkbar from './Components/Linkbar/Linkbar';
import ImageDisplayer from './Components/ImageDisplayer/ImageDisplayer';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Signin/Signin';
import Navonsign from './Components/Navonsign/Navonsign';
import Register from './Components/Register/Register';


class App extends Component  {

  constructor() {
    super();
    this.state={
      input: '',
      imageUrl: '',
      box:{},
      route:'signin',
      user:{
        id:'',
        name: '',
        email: '',
        password: '',
        date: ''
      }
    }
  }
  


  //loading users

  loadUser = (data) => {
    this.setState({user :{
      id:data.id ,
      name:data.name ,
      email:data.email ,
      password: data.password ,
      date: data.date
    }})
  }

  calculateFaceLocation = (data) =>{
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inpimg');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiData.left_col * width,
      topRow:  clarifaiData.top_row * height,
      rightCol: width - (clarifaiData.right_col * width),
      bottomRow: height - (clarifaiData.bottom_row * height)
    }
  }


  faceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

   onEnter = (event) => {
    if (event.key === 'Enter') {
      this.onButtonClick();
    }
  };

  onButtonClick = () => {
      this.setState({ imageUrl: this.state.input});
        fetch('https://lit-caverns-20576.herokuapp.com/imageurl',{
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            }) 
          })
        .then(response=>response.json())
        .then(response=> 
          this.faceBox(this.calculateFaceLocation(response)))
        .catch(err=> {console.log(err)})
        }


  onRouteChange = (route) => {
    this.setState({route: route})
  }

  refreshPage = () =>{
    window.location.reload(false);
  }


 render() {
  return (
    <div className="App">
      { this.state.route ==='home'
       ?  <div>
       <Navigation  name={this.state.user.name} refreshPage={this.refreshPage} onRouteChange={this.onRouteChange}/>
       <Linkbar onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} onEnter={this.onEnter}/>
       <ImageDisplayer  box={this.state.box} imageUrl={this.state.imageUrl} />
       <Footer/>
         </div>

       : ( this.state.route ==='signin' 
        ? <div>
          <Navonsign  refreshPage={this.refreshPage} onRouteChange={this.onRouteChange} route={this.state.route} />
          <Signin loadUser={this.loadUser} route={this.state.route} onRouteChange={this.onRouteChange}/>
         </div>
        : <div>
         <Navonsign/>
         <Register loadUser={this.loadUser}  onRouteChange={this.onRouteChange}/>
         </div>
        )
      }
        
    </div>

  );
}
}


export default App;
