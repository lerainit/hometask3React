
import React from 'react'
import { NavLink } from 'react-router-dom'
import BackButton from '../backbutton/backbutton'
import PropTypes from 'prop-types'
import styles from './Navigation.module.scss'


const Navigation = ({addCards,addFavoritesPage}) => {

    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to='/' ><h2 >Fashion store</h2 ></NavLink><BackButton/>
            <div className={styles.container}><NavLink className={styles.cart_link} to="/cart"><img className={styles.cart} src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2> CART:{addCards}</h2></NavLink>
                <NavLink className={styles.fav_link} to="/favorites"><img className={styles.favorite_img} src="./star.png" alt="" /> <h2>FAVORITES:{addFavoritesPage}</h2></NavLink>


            </div></header>)
}
Navigation.propTypes = {
    addCards:PropTypes.number,
    addFavorites:PropTypes.number
}
Navigation.defaultProps ={
    addCards:0,
    addFavorites:0
}
export default Navigation