import React from 'react'
import Navbar from './components/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}>
      </Route>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}>
      </Route>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}>
      </Route>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}>
      </Route>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
