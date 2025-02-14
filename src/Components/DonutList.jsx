import React, { useState, createContext } from 'react';
import { donuts } from './Donuts.js';
import { FaPlus } from 'react-icons/fa';
import '../styles/donutslist.css';
import Cart from './Cart.jsx';

export const BoxContent = createContext({
  cart: [],
  removeFromCart: () => {},
  setCart: () => {}
});

function DonutsList() {
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const addToCart = (donut) => {
    setCart((prevCart) => {
      const existingDonut = prevCart.find((item) => item.id === donut.id);
  
      if (existingDonut) {
        return prevCart.map((item) =>
          item.id === donut.id ? { ...item, qte: item.qte + 1 } : item
        );
      } else {
        return [...prevCart, { ...donut, qte: 1 }];
      }
    });
  };
  

  const removeFromCart = (donutId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== donutId));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const categories = ["All", ...new Set(donuts.map((donut) => donut.category))];
  const filteredDonuts =
    category === "All" ? donuts : donuts.filter((donut) => donut.category === category);

  return (
    <BoxContent.Provider value={{ cart, removeFromCart, setCart }}>
      <div className="container">
        <div className="parent-container">
          <h1 style={{ textAlign: 'center', color: "#d57e7f", fontSize: "50px", fontWeight: '550' }}>
            Try Them Today
          </h1>
          <ul className="categories">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="category"
                value={cat}
                onClick={() => handleCategoryChange({ target: { value: cat } })}
              >
                {cat}
              </button>
            ))}
          </ul>
          <div className="section" style={{ marginLeft: '110px' }}>
            {filteredDonuts.length > 0 ? (
              filteredDonuts.map((donut) => (
                <div className="plat" key={donut.id} style={{ width: "300px" }}>
                  <img
                    className="card-img-top rounded-circle"
                    src={donut.image}
                    alt={donut.name}
                    style={{ width: "200px", height: "200px" }}
                    id='donuts_img'
                  />
                  <div className="card-body">
                    <h2 className="card-title">{donut.name}</h2>
                    <span className="badge bg" style={{ color: '#ffffff', backgroundColor: '#42182c' }}>
                      {donut.category}
                    </span>
                    <h3 style={{ color: '#d57e7f' }}>{donut.price} DH</h3>
                    <FaPlus
                      style={{ color: "#42182c", border: '1px solid #42182c', borderRadius: '3px' }}
                      className="plus"
                      onClick={() => addToCart(donut)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h2>No Donuts Available</h2>
                <p>Please choose another category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Cart />
    </BoxContent.Provider>
  );
}

export default DonutsList;
