import React , { Component } from 'react';
//import logo from './logo.svg';
  
import Nav from './Components/Nav';
import Home from './Components/Home';
import About  from './Components/About';
import Users  from './Components/Users';
import NotFound  from './Components/NotFound';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

 
class App extends React.Component{
	 state = {
		 items :[
			 {id:1, name:"Ahmed",     phone :"0796554693"},
			 {id:2, name:"Ahmed",     phone :"0796554693"},
			 {id:3, name:"Ahmed",     phone :"0796554693"},
			 
			 
		 ]
	 }
	 handleAdd = ()=>{
		 let items = this.state.items;
		 items.push({id:4, name:"Ahmed",     phone :"0796554693"});
		 this.setState({
			 items:items
		 })
	 }

	 handleDelete = ()=>{
		 
		this.state.items.pop();
		 
	}
	 componentDidUpdate(prevProp,prevState){
		 console.log("componentDidUpdate");
	 }

	render(){
		 return (
			<BrowserRouter>
			
    			<div className="App">
				<Nav />
				<Switch>
				<Route exact path ="/" component ={Home} />
				<Route exact  path ="/About" component ={About} />
				<Route exact  path ="/Users" component ={Users} />
				<Route exact  path ="/:NotFound" component ={NotFound} />
			 </Switch>

	
				
			</div>
			
		</BrowserRouter>
    
   
    )
	}
 }
 
 
export default App;
 