import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './componentns/favoritespage/favorites';
import CartPage from './componentns/cart/cart';
import ProductPage from './componentns/productpage/productPage';
import NotFoundPage from './componentns/notfoundpage/notfoundpange';

const AppRoutes = ({products,openModal,addFavoritesFunc,addFavorites,deleteCartItem,openDeleteModal,setCartId}) => {
    return (
     
        <Routes>
            <Route path='/' element={   <ProductPage  products={products} openModal={openModal} addFavoritesFunc={addFavoritesFunc} ></ProductPage>} />
           <Route path='/favorites' element={<FavoritesPage  addFavorites ={addFavorites}/>} />
         
           <Route path='/cart' element={<CartPage addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={deleteCartItem} openDeleteModal={openDeleteModal} setCartId={setCartId}  />}/>
           <Route path='*' element={<NotFoundPage />} />
         </Routes>

        
    )
}
export default AppRoutes;
