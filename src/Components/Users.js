import React , { Component } from 'react';
import axios   from 'axios';

class Users extends Component{
    state = {
        users:[]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data);
            this.setState({
                users : res.data
            })
        })
    }

    render(){
        return (
            <div  className = "App"    >
               <h2> Users: </h2>
                <div> 
                    {this.state.users.map(user=> <p>{user.name}</p>)}
                </div>
            </div>
        )
    }

}
export default Users;