import React , { Component } from 'react';
//import logo from './logo.svg';
  
import Nav from './Components/Nav';
import Home from './Components/Home';
import About  from './Components/About';
import Resume  from './Components/Resume';

import Users  from './Components/Users';
import NotFound  from './Components/NotFound';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Welcome  from './Components/Welcome';
import Services  from './Components/Services';
import Works  from './Components/Works';
import Contact  from './Components/Contact';
import Testimonials  from './Components/Testimonials';


 class App extends React.Component{
 
	 componentDidUpdate(prevProp,prevState){
		 console.log("componentDidUpdate");
	 }


	render(){
	 
 		 return (
			<BrowserRouter>
			<Nav />
    			<div className="App">
				
				<Switch>
				<Route exact path ="/" component ={Home} />
				
				<Route exact  path ="/Services" component ={Services} />
				<Route exact  path ="/Welcome" component ={Welcome} />
				<Route exact  path ="/About" component ={About} />
				<Route exact  path ="/Resume" component ={Resume} />
 				<Route exact  path ="/Works" component ={Works} />
				 <Route exact  path ="/Testimonials" component ={Testimonials} />
				 <Route exact  path ="/Contact" component ={Contact} />
				<Route exact  path ="/:NotFound" component ={NotFound} />
				
			 </Switch>

	
				
			</div>
			
		</BrowserRouter>
    
   
    )
	}
 }
 
 
export default App;
 