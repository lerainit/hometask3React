
import React from 'react'
import styles from './modal.module.scss'
import PropTypes from 'prop-types'


const  Modal = ({handleClick,modalFunc,text,buttonText}) => {
  
return(

<div className={styles.modal}>
  <div className={styles.outer_container} onClick ={handleClick}></div>
  <div className={styles.modal_main_container} >
 
<button className={styles.close_btn} onClick ={handleClick}>X</button>

<p>{text}</p>
<button className={styles.modal_btn} onClick ={modalFunc} >{buttonText}</button>
</div>
</div>

) 

}
Modal.propTypes ={
  text: PropTypes.string ,
  backgroundColor:PropTypes.string ,
  color:PropTypes.string ,
  handleClick:PropTypes.func.isRequired,
  modalFunc:PropTypes.func.isRequired 
  
  }
  
  Modal.defaultProps ={
  text:'add this cart',
  backgroundColor:'lightgreen',
  color:'#000',}

export default Modal