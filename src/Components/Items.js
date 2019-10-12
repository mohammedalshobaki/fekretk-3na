import React , { Component } from 'react';
import './Items.css'

class Items extends Component{
 

  render (){
    const {items} = this.props;
    const theItems = items.map((item) =>{
        return (
            <div  className = "item"  key = {item.id} >
                <p>{item.id} :  {item.name}  - {item.phone}  </p>
            </div>
        )
    })
        return (
            <p>{theItems}</p>
        )
    }
}
export default Items;
