import React, { useState, useContext } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { BoxContent } from "./DonutList";
import "../styles/cart.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Cart() {
  const { cart, removeFromCart, setCart } = useContext(BoxContent);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false); // State to track form visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const decrement = (donutId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === donutId) {
          return { ...item, qte: Math.max(1, item.qte - 1) };
        }
        return item;
      });
    });
  };

  const increment = (donutId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === donutId) {
          return { ...item, qte: item.qte + 1 };
        }
        return item;
      });
    });
  };

  const totalPrice = cart.reduce((acc, donut) => acc + donut.price * donut.qte, 0);

  // Function to handle navigation to the Checkout component
  const handleProceedToCheckout = () => {
    navigate('/checkout'); // Navigate to the Checkout route
  };

  return (
    <div className="container">
      <div className="cart-container p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: "#d57e7f" }}>
          My Shopping Cart
        </h1>
        <div className="cart-items bg-white p-4 rounded-lg shadow-md">
          {cart.length === 0 ? (
            <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg" style={{padding:'40px'}}>
              <h3>Your Cart is Empty</h3>
              <p>Please select your favorite donuts from the menu.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-sm font-semibold">Product</th>
                  <th className="p-4 text-sm font-semibold">Price</th>
                  <th className="p-4 text-sm font-semibold">Quantity</th>
                  <th className="p-4 text-sm font-semibold">Total</th>
                  <th className="p-4 text-sm font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((donut) => (
                  <tr className="border-t" key={donut.id}>
                    <td className="p-4 flex items-center">
                      <img
                        src={donut.image} style={{width:"100px",height:"100px"}}
                        alt={donut.name}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <span>{donut.name}</span>
                    </td>
                    <td className="p-4">{donut.price} DH</td>
                    <td className="p-4">
                      <FaCircleMinus
                        onClick={() => decrement(donut.id)}
                        style={{ cursor: "pointer" }}
                      />
                      <b>{donut.qte}</b>
                      <FaPlusCircle
                        onClick={() => increment(donut.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                    <td className="p-4">{donut.price * donut.qte} DH</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeFromCart(donut.id)}
                        id="checkout"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="cart-summary mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#d57e7f" }}>
            Order Summary
          </h2>
          <div className="flex justify-between mb-2">
            <span>Total:</span>
            <span className="font-bold">{totalPrice} DH</span>
          </div><br />
          <div>
            <button
              onClick={handleProceedToCheckout} // Use the navigation function
              id="checkout"
              style={{textDecoration:'none',width:'260px',height:'60px'}}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Checkout Form Section */}
        {isCheckoutVisible && (
          <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d57e7f' }}>
              Checkout
            </h2>
            <form id="form-check">

            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;