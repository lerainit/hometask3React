
import './App.scss';
import React, { useEffect, useState } from 'react'
import Modal from './componentns/modal/modal'
import Navigation from './componentns/navigation/Navigation';
import AppRoutes from './AppRoutes';
import initLocalStorage from './initLocalStorage';


initLocalStorage()


const App = () => {

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [products, setProducts] = useState([])
  const [buttonText, setButtonText] = useState('Add to Cart')
  const [text, setText] = useState('Are  you sure you want to add this product to cart?')
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [backgroundColor] = useState('cadetblue')
  const [color] = useState('green')
  const [addCardsArr, setAddCards] = useState([])
  const [addFavoritesArr, setFavorites] = useState(JSON.parse(localStorage.getItem('addFavorites')))
  const [cardId, setCardId] = useState(null)
  const [index, setIndex] = useState(null)

  
  useEffect(() => {
    if (!localStorage.getItem('products')) {
      (async () => {
        const products = await fetch('productsJSON.json').then(response => response.json())
        setProducts(products)
        localStorage.setItem('products', JSON.stringify(products))
      })()
    } else {
      setProducts(JSON.parse(localStorage.getItem('products')))

    }
    if (localStorage.getItem('addCards')) {
      setAddCards(JSON.parse(localStorage.getItem('addCards')))
    }
  }, [])

const deleteCartItem = (elIndex) => {

  setAddCards(current =>{
    let addCardsArr = [...current]
    let newAddCardsArr = addCardsArr.filter((el, index) => elIndex !== index)

    localStorage.setItem('addCards', JSON.stringify(newAddCardsArr))
return newAddCardsArr

})
setIsOpenDeleteModal(false)
  }

const openModal = (id) => {

    setIsOpenModal(true)
    setCardId(id)
    setText('Do you want to add this product to cart')
    setButtonText('Add to  Cart')

  }

  const setCartId = (index) => {
    setIndex(index)
 }

  const openDeleteModal = () => {
    setIsOpenDeleteModal(true)
    setText('Do you want to delete this product from cart')
    setButtonText('Delete from Cart')
  }

const addtoFavorites = (id) => {

    const index = products.findIndex(el => id === el.id)

    if (products[index].addFavorites === false) {

   setFavorites(current =>{
  let addFavoritesArr = [...current]
    
      products[index].addFavorites = true
      addFavoritesArr.push(products[index])
      localStorage.setItem('products', JSON.stringify(products))
      localStorage.setItem('addFavorites', JSON.stringify(addFavoritesArr))
return addFavoritesArr
  })
    } else {
      setFavorites(current =>{
        let addFavoritesArr = [...current] 
      products[index].addFavorites = false
      let newAddFavoritesArr = addFavoritesArr.filter(({ id }) => id !== products[index].id)

      localStorage.setItem('products', JSON.stringify(products))
      localStorage.setItem('addFavorites', JSON.stringify(newAddFavoritesArr))
     return newAddFavoritesArr
    
    })
    }
  
    setProducts(products)

  }

   const addCart = (id) => {
    setAddCards((current) => {

      let addCardsArr = [...current]
      const index = products.findIndex(el => id === el.id)
      addCardsArr.push(products[index])
      localStorage.setItem('addCards', JSON.stringify(addCardsArr))

      setIsOpenModal(false)
      return addCardsArr
    })

  }
  return (
    <>

      <div className='App'>

        <Navigation addCards={addCardsArr.length} addFavoritesPage={addFavoritesArr.length} />

        <AppRoutes addFavorites={addFavoritesArr} products={products} openModal={openModal} openDeleteModal={openDeleteModal} setCartId={setCartId} addFavoritesFunc={addtoFavorites} deleteCartItem={deleteCartItem} />

      </div>

      {isOpenModal &&
        <Modal text={text} buttonText={buttonText} backgroundColor={backgroundColor} color={color} handleClick={() => { setIsOpenModal(false) }} modalFunc={() => { addCart(cardId) }} ></Modal >}
      {isOpenDeleteModal &&
        <Modal text={text} buttonText={buttonText} backgroundColor={backgroundColor} color={color} handleClick={() => { setIsOpenDeleteModal(false) }} modalFunc={() => { deleteCartItem(index) }}></Modal >}
    </>
  );
}


export default App

