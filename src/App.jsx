import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DonutsList from './Components/DonutList';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { ScrollLink, Element } from 'react-scroll';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Element name="home">
              <Home />
            </Element>
            <Element name="menu">
              <DonutsList />
            </Element>
            <Element name="client">
              <Clients />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
          </>
        } />
                <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;