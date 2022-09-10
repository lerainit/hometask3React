import React from "react";
import styles from './FavItem.module.scss'
import  PropTypes from 'prop-types'


const FavItem = ({name,price,url,art}) => {
    return (
        <>

            <ul>
                <li><span>Name:</span>{name}</li>
                <li><span>Price:</span>{price}</li>
                <li><img className={styles.image} src={url} alt='Product ' /></li>
                <li><span>Art:</span>{art}</li>
            </ul>
        </>
    )
}
FavItem.propTypes  = {
    name:PropTypes.string,
    price:PropTypes.number,
    url:PropTypes.string,
    art:PropTypes.number,
   
    
    }
    FavItem.defaultProps ={
    
        name:'Product name',
        price:0,
        url:'',
        art:0,
        
    
    }
export default FavItem