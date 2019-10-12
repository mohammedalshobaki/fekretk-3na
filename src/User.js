import React , { Component } from 'react';
class User extends  Component{
    
    render(){
       let name = this.props.name;
       let phone = this.props.phone;
       let age = this.props.age;
      return (
        <div>   {name} Phone : {phone} age : {age}  </div>
        
      ) 
    }
  }
  export default User;
