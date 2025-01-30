import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import DonutsList from './Components/DonutList'
import Clients from './Components/Clients'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import { Link as ScrollLink, Element } from 'react-scroll'; // For smooth scrolling
import {Link , Route, Routes} from 'react-router-dom'
import Checkout from './Components/Checkout'


function App() {
  return (
    <>
    <Navbar />
      <Element name="home" >
        <Home />
      </Element>
      
      <Element name="menu">
        <DonutsList />
      </Element>
      {/* <Element name="cart" >
        <Cart />
      </Element> */}
      <Element name="client">
        <Clients />
      </Element>
      <Element name="checkout" >
        <Checkout />
      </Element>
      <br /><br />
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

export default App
