import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';

 

class Loader extends Component{
    toggle = () => {
		 
		this.setState({
            backgroundColor :"#ff000100" , 
            zIndex :"0"  
		});
	  };
	 componentDidMount( ){
        setInterval(() => {
         this.toggle();
    }, 200);
	
	}
	 
	state = {
        backgroundColor : "#86a438",
        zIndex :"9999" 
	  };
	
 render (){
    return (
            <div  className = "App" >
         <div className="prelfoader"   >
          		<div className="loading-mask" style ={{backgroundColor : this.state.backgroundColor,zIndex :this.state.zIndex}} ></div>
         		 <div className="loading-mask" style ={{backgroundColor : this.state.backgroundColor, zIndex :this.state.zIndex}} ></div>
         		 <div className="loading-mask" style ={{backgroundColor : this.state.backgroundColor, zIndex :this.state.zIndex}} ></div>
         		 <div className="loading-mask" style ={{backgroundColor : this.state.backgroundColor, zIndex :this.state.zIndex}} ></div>
          		  <div className="loading-mask" style ={{backgroundColor : this.state.backgroundColor, zIndex :this.state.zIndex}} ></div>
      </div>
            
            </div>
        )
    
        
    }
}
export default Loader;
