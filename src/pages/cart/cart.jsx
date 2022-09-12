import React from 'react'

import CartItem from '../../componentns/cartitem/cartItem'
import PropTypes from 'prop-types'

const CartPage = ({addCards,deleteCartItem,openDeleteModal,setCartId}) =>{
if(addCards.length === 0 ){
    return(<> <h1>No items have been added</h1></>)
}
else{
return(

<>

{addCards.map(({id,name,price,art,url},index) =><CartItem key={index}  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={deleteCartItem} index={index} openDeleteModal={openDeleteModal} setCartId ={setCartId} ></CartItem>)}

</>

)
}
}
CartPage.propTypes  = {
    name:PropTypes.string,
    price:PropTypes.number,
    url:PropTypes.string,
    art:PropTypes.number,
    deleteCartItem :PropTypes.func.isRequired,
    openDeleteModal:PropTypes.func.isRequired,
    id:PropTypes.number,
    setCartId :PropTypes.func.isRequired
    
    }
    CartPage.defaultProps ={
    
        name:'Product name',
        price:0,
        url:'',
        art:0,
        id:-1,
        fill:'#fff'
    
    }
export default CartPage


