import React, {Component} from 'react'
import {Link} from "react-router-dom"

class ShoppingCartItems extends Component {
    render(){
        return(
            <div> 
                <Link className = "close-cartin-craete" to ="/">Close</Link>
                <form className = "create-cart-form">
                </form>
            </div>
        )
    }
}


export default ShoppingCartItems 