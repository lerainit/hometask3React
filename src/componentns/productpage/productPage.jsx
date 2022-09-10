import React from 'react'
import Card from '../card/productCard'
import PropTypes from 'prop-types'



const ProductPage = ({products,addFavoritesFunc,openModal}) =>{

return(
<>
   
     {products.map(({id,name,price,art,url,addFavorites}) =><Card key={id} id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites=== true? '#FFFF00':'#fff' } addFavoritesFunc={()  =>{addFavoritesFunc(id)}} openModal ={openModal}  ></Card>)}
    
    </>
    )
    
}
ProductPage.propTypes={

     addCards: PropTypes.number,
   products:PropTypes.array.isRequired,
   addFavoritesPage:PropTypes.number,
   addFavoritesFunc:PropTypes.func.isRequired,
   openModal:PropTypes.func.isRequired,
   clearFavorites:PropTypes.func.isRequired
   
   }
   ProductPage.defaultProps ={
   addCards:0,
   addFavoritesPage:0
   
   }
    export default ProductPage
   