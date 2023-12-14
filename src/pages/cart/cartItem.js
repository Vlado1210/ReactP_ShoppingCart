import React, { useContext} from 'react';
import { ShopContext } from '../../context/shopContext'

const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data; 
    const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} alt=''/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        <div className='countHandler'>
            <button onClick={() => (removeFromCart(id))}>-</button>
            <input type="text" value={ cartItems[id] > 0 ? cartItems[id] : '' } />
            <button onClick={() => (addToCart(id))}>+</button>
        </div>
        </div>
    </div>
  )
}

export default CartItem