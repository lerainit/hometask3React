import React from 'react'
import styles from './cartItem.module.scss'
import PropTypes from 'prop-types'

const CartItem = ({name,price,url,art,index,setCartId,openDeleteModal}) => {


    return (
        <>
<div className={styles.cart_item}>
            <ul>
                <li><span>Name:</span>{name}</li>
                <li><span>Price:</span>{price}</li>
                <li><img className={styles.image} src={url} alt='Product ' /></li>
                <li><span>Art:</span>{art}</li>



               
            </ul>
             <button className={styles.del_from_cart_btn} onClick={() => {

                    setCartId(index)
                    openDeleteModal()
                }}>X</button>
</div>


        </>
    )
}
CartItem.propTypes  = {
    name:PropTypes.string,
    price:PropTypes.number,
    url:PropTypes.string,
    art:PropTypes.number,
    deleteCartItem :PropTypes.func.isRequired,
    openDeleteModal:PropTypes.func.isRequired,
    id:PropTypes.number,
    setCartId :PropTypes.func.isRequired
    
    }
    CartItem.defaultProps ={
    
        name:'Product name',
        price:0,
        url:'',
        art:0,
        id:-1,
        fill:'#fff'
    
    }
export default CartItem;




