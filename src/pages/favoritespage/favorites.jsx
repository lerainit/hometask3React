import React from 'react'
import FavItem from '../../componentns/favitem/FavItem'
import PropTypes from 'prop-types'

const FavoritesPage = ({addFavorites,openModal}) =>{

return(
  
   
    
    <>

{addFavorites.map(({id,name,price,art,url}) =><FavItem key={id}  id ={id}  name= {name} price ={price} art ={art} url={url} openModal={openModal} ></FavItem>)}

</>   
    
    
   
)


}
 FavoritesPage.propTypes ={
     addFavorites:PropTypes.array.isRequired
 }
export default FavoritesPage