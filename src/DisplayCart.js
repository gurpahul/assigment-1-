import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {link} from 'react-router-dom'


class DisplayCart extends Component{
    static propTypes = {
        carts: PropTypes.array.isRequired,
    onIncreaseCartItem: PropTypes.func.isRequired
    }



    render(){
        return(

            <div className = 'list-carts'> 
            <div className ='list-carts-top'>                                           
            </div>
            <ol className="cart-list">
            
                    {this.props.carts.map((cart) => {
                        console.log(this.props)
                        return(<li key = {cart.id} className = "cart-list-item">
                                <div className= "cart-image">
                                <img src={cart.image}/>
                                </div>
                                <div className = "cart-name">
                                <p>{cart.name}</p>
                                <p>price = ${cart.price}</p>
                                <p>{cart.description}</p>
                                <div> <button onClick={() => this.props.onIncreaseCartItem(cart)} className = "add-cart">ADD ITEM</button></div>
                                </div>
                               
                                </li>
                        )
                    })}

                   
                </ol>
            </div>
           
                
        )

    }


}



export default DisplayCart