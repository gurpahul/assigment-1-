import React, { Component } from 'react';
import './App.css';
import DisplayCart from './DisplayCart'
import ShoppingCartItems from './shoppingcartitems'
import {Route} from 'react-router-dom'


class App extends Component {
  state = {
    screen: 'create',
    addedItems: [],
    carts: [{
      price: 20,
      name: "Dodge",
      description: "good car",
      image: "https://smartercharger.com/wp-content/uploads/2013/03/buying_lg_sports_cars.jpg",
      id: 1,
      totalitems: 0
    },
    
    {
      price: 30,
      name: "Escalade",
      description: "good  vcar",
      image: "https://img2.carmax.com/stock/mm-cadillac-escalade/500",
      id: 2,
      totalitems: 0
    },
    
    {
      price: 40,
      name: "Swift",
      description: "good vvcar",
      image: "https://ic1.maxabout.us/autos/cars_india//M/2015/3/maruti-swift-rs-diesel-p.jpg",
      id: 3,
      totalitems: 0
    },
    
    {
      price: 45,
      name: "Rolls-Royce",
      description: "good vvvcar",
      image: "http://cdn-ds.com/stock/2018-Rolls-Royce-Dawn--Thousand-Oaks-CA/seo/VAMP16967-SCA666D55JU107581/sz_70838/image-1.jpg",
      id: 4,
      totalitems: 0
    },
    
  ]
  

  }

  addrating = (item) => {
  this.setState({addedItems: [...this.state.addedItems], item})  
    
      
    
  }

  render() {
    return (
     <div className="cart1">
      <Route exact path="/" render={() => {     
        return <DisplayCart  onIncreaseCartItem={this.addrating} carts={this.state.carts}/>
      }}/>
      <Route path="/create" component = {ShoppingCartItems}/>
     )}
     </div>
    )
  }
}

export default App;
