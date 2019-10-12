import React , { Component } from 'react';

class Form extends Component{
    state={
        name:'ahmed',
        newname: ""
    }
      write = (e)=>{
      this.setState({
          name: e.target.value
      })
    }
    prev = (e)=>{
        e.preventDefault();
        this.setState({
            newname: this.state.name
        })

        
      }
  
  render (){
    
        return (
        <form onSubmit ={this.prev}  >
            <input type = "text" onChange = {this.write}/>
            <button type = 'submit'> Click </button>
            {this.state.newname}
        </form>

      
        
        )
       
    }
}

export default Form;
