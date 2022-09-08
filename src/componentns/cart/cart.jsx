import React from 'react'

import CartItem from '../cartitem/cartItem'

const CartPage = (props) =>{


return(

<>

{props.addCards.map(({id,name,price,art,url},index) =><CartItem key={index}  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={props.deleteCartItem} index={index} openDeleteModal={props.openDeleteModal} setCartId ={props.setCartId} ></CartItem>)}

</>





)






}
export default CartPage


