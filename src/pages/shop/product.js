import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data; 
    const { addToCart, cartItems } = useContext(ShopContext);
  return(
    <div className='product'>
        <img src={productImage} alt=''/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart { cartItems[id] > 0 ? `(${cartItems[id]}) ` : '' }</button>
    </div>
  )
}

export default Product