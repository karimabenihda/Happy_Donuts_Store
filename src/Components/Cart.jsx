import React, { useState, useContext } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { BoxContent } from "./DonutList";
import "../styles/cart.css";
function Cart() {
  const { cart, removeFromCart, setCart } = useContext(BoxContent);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false); // State to track form visibility
  
  
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
          <div
          
          >
            <a id="checkout" href="#form-check" style={{textDecoration:'none',width:'300px',height:'100px',padding:'20px'}}>
          Proceed to Checkout</a>
          </div>
        </div>

        {/* Checkout Form Section */}
        {isCheckoutVisible && (
          <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d57e7f' }}>
              Checkout
            </h2>
            <form id="form-check">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label><br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className=""
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label><br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Shipping Address
                </label><br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="1234 Main St, City, Country"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                  Name on Card
                </label><br />
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  placeholder="John Doe"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Credit Card Number
                </label><br />
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Payment Options</label><br />
                <div className="flex space-x-4 mt-2">
                  <img
          src="data:image/png;base64,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"
                    alt="Visa"
                    className="h-12 w-auto rounded shadow"
                    style={{ width: '100px', height: '50px' }}
                  />
                  <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAABqlBMVEX/////mQDMAADJAAAAAGb/nwD/nAAAAGj/lwD/mAD/kQD/kwAAAGf/lQDRAAD/nQAAAFnQGwDeSQAAAF8AAGDvdQAAAFvULADVAADvw8MAAFZ9AEQnJ3H3iAAAAFL77e3V1eHf3+bnpKT/3r7/0aT/8OH09Pjc3OZuAEj/+PH///356Oj/2rbdeHjr6/H99vaEAD+JUkiiYUHpq6v019f/vHX/5s7ghYVQUIevr8Whobv/s19oaJWUlLL/qUXyzs7XW1vTQEDbbW3ijY3FxdXst7eFhajVT090dJ1jAE0yMnfQKyuqACf/woP/zJn/qEC4ABqQADhIAFf/r1VYWIt8Sk3BAA8sAF4REWv90JL/oCQ/P35nAEwcHG6YW0RrQFJaNla4AACyACK7cDTOfCugAC1AAFnagyPSNjbmYADaQQrzfgDMnH+4ZBVtNT1DHlC+O0cxAEZOL1qWhZfHhVWll6aScpAqGWBnADerYncAAEZVAE/fwa3PxsmSADDoixg6NHFIAEGRABu4jJ2UR2VZSXM7I153ACWtSl1tMGOwajlMG0GfAAjHcRYgpwJVAAAZh0lEQVR4nO1d/V/bRp42lmzJsi27teoahwABGzBvTgKYdww2YAiYl0AgJe8JCbS7217b6yZ3acN27y5713b/55vRy8x3JNn4VXI/2+eHBEv2zOjR931GI4/nD7iAbLZvbKyvL5t1rMfRTCaTRshkRh3rsxGM5aeKhdKOlwM4KRWKU91jbepxND2YKi+u+IMSRdC/slhODaY7javpqYkdlRKvFerxncLAdEt7zOT2Fs8QIcGwKAa6IAJiOBxEpJ3NpHIdwlO+uGbPjYWptWK+JT2ODpbPpGA4zFJjRiCMeNovu01T39RqLfQAmkoDfc11mU6tIHqqs8PydJTKtOZq60d2aq0OeihNl42zlN5D4iPWSI8BMSjtu8JS92oD/BgslTYa6HF0fF+qWXxMwoRkabDlFFRFtuhtlB+Dpdk63Vy6HKxbflhZCpedE6XpQsMCBElarcPH5Y6kcBP8aAhLi+n2sQIwXWqeH52ltRo93OCZ1IwAQZJWcu1lx9NKgmomKXcmNWaB7CC2m6S+QisJUkkqXWOT0istJEgjqZ3qVmw1QSpJE1V6zMy0SMUgwlK5TfFkd5NerCJHXMUQIBVs3kjbkiSOt4Gg7Gp7CFJJWrPVtvR+sC0EIQSko5ZHABvtI0glacDa5V4bdIxClFosSG0UIZ2jNVN1KdM+EdIhHbXQIk23mR+NpG7Y5XhbRUhDONwy/z/QbhHSOZqlXc5IbSeoC1ukvdYw1HYlIxwZypY5a7eSGQiutEDZ+k6cYghD9WzpcPuVzEC4q+k4ctpJgjSDNN7icLo6AsEmDVKbfb0NR1MpR8wQ4Kg57++QoYYUfdKeeLoamjHabcnJqjP0qc9xhhBH5T8YahdHLjD0pTsMNcrRvxJDjXHkgqV2Sct0juq22Y57e5cZQhzV6fsdjhgxQ1/5/Ayc56iuGLLPcYa8n9w0Ieg0SYFgPVW2E8cZ8jJrbtRFJo7HkKK/doYcy+2r4pOI0xyFj2plyHlnZgsX7HewRrfmvKmuAO4zx+WoRpPtNjMUnFOVNYKAWEuJreUTrk3gc8dVLbx4PUPOx4xVwH3pvKpdG0FmO4khxNFNx0PIa6OjVedZqHrSBc9/jarl3Ujv/dXgNENI1aov+XNezTgXSKiOQFc1hlyoEX3WcRRVDSBdsNXOu/UaIFW22AXHGXLBY9WA8EwlhsacF6KvOlGIkBhVmqJ1weHfdJsMe4gVUv4/hIiighh1rhAFHDdYom386IIQWSqNlfAnxzmyFaMJ5xmqGS5k/DZOrcPyVxYumHWb2KhDqrH24D51Ppu1htidzBDiyGmGkIswM+R8il8XXEjlLGXsgtskXIMOKNF2thAhMXJ4eR+CxFb6XahY1xoT6XC+ih1kq9guRNZ/kuqD0wyZEjUXgqJPOjU9o2A0zYXVRM4rTt1gNK3gNENeF9KuusEkIY4z1JKqvhgOYrTvcYgwZYhZ6GBa5XPN4UbRdKUIbwZSTg0OjqfK+1Kju0DYtKpDXdwE0n2Yn3ED3QBkSoTrZtBsWaBZUxSWFmHwm9s7a8FWB1i1BnWUcXPhlK3L55inC7sNigpspNk0RU2ZooA0Y8nD0zMt4Ig+MpPCrQG3T4VITshMxzpFssw8cujxXDbIDIGvARisimd29a5U0xT5fQHSsEY4MUa03ih/UOaYfrXsNhGLmcbTmDHiitk+Dd3yJ3XDq0meX/qzDUHGRTXD0EUoSVrbV40bMUY0KpJH+E0big74LXY4DRZx6eOvjVSnNPvl+8uyLUOelWYdm/9VqIe0pi3+IpHRLBlv4n5s3kqRfCO2zg6nuyGKOI48jt+QLfsKURT5mr2HFE3rWeQuv2Q0ltHynbDx2EOJDCKhxPuZftVwIHFq1jNWCGqMARI8TxpYs9J3fSiBchb/N0see2RoEoc3nEMQawwEAgHti5EHChHQnCZF4or+GQxUiA5ZKbLomSEE+KrWVidmZ2cLNlvOaScnCoXSmsoiF6J2jiWE41aLA1MDsyVTGzAKw//7fd/1eCogp1GEwkkpsLJYRljEe9IRIsIg4BElckYMSv79syAOGXzPqbKk9FWWovaR5rDyrsCzHWOKrHqmCgHHXRa7wa5o00XmArnVDbhl2tisd5fauezAwMCUIbzcJXWXebjkuzQ1oGLqBHU2hVp79iw6yQ6kf319WPtrHF9UUFrZy9F4YDQ3Y4RL4b2UBhTwoJhqVPu+KC0Oql/PlaWw72H0lvHLsv4zvchPY2v5kGcdmnrOqmfYoXE2m8ZRo8atmncBKcqHCmvnjGiM3VRlmjzRTTfJ4Dg1LJuPKYypXp9LxuPxaPLRwpB2UeFxy3rXzKImXZJxYDyoLbE6Q9oV3E/DLwpR8smw/Xp1Fjo0xWQMseuy6pn6iIh5MBiGGbfZS2ZVfmyyc+pTFJaNMJBpNMdiY/r+PU94BXxtaC7KC4IQ4nk+Fv3z6KLo9+/bjWkPceSP+IyPZc2RY700PV/1Y/IJ+dvwjrpLG7B1aJP66KieDREzhZhI/JvdcHS6OZu9rXYSb5KsneNUabNpRLXl8va3hlJ1r6n/9UdjC/RLk/zpnV9+uXvnO8yScBWORC6efm87pnLQf/ENObWvycWiaF2wN09UiNh+faoI+Hye3miNFkRR4lSBRzAGvAcxs2TpULXHZhsZD5fgHzIH1Nhqza4N1TiisZDuNGq3lDj9zuQ3F76I34/Eo+vVR0Hw+895QVmwNKXizP8LTzRUc+Ojkt2SxmHjjxyhqEyvStMPgdzoIa07pFJEz6gOTiC7UmE4WOxe2x4/4I+ZI/lK2qrJNSfcMz7q0qTA2/LvEZLk+X3nzyORpwIfN3sVHYPiHaIdo5q1Gg/f/MH+y9pp47EBffkDiVGgQ+vXKMhy8m1dsoboANfkEYuTM7Aj/zZvczjvfc2zYfEU5+UqbVuIeN41W8DhKLBlKebRB3+kK/JM4M3ujqDreXyYPTITfFThuyoMh2YERuThM+jQ5g2KEqc8c0S9gsR9MpyhSXZgRc4UWmnYkG+bAveiV/4r/TREvDfGhNcqpwsxYKwtYaHvbYhq5tAkO4SjU/OY/L23PFVwZJjrwJn6megZdGibBkUHRjTziMhNH5dQUBywvrx0T4kmo9FkbK6ftL7xjigI+srSE0V52DP3H7Ml+b3pThbkd3TcW8h9J+8Bf2CV06UYDazHrc/PCDz/CBG9fPwklkxGk0l+iZJQVkJsW+mvGRFdX+9nz/vJHdByfVuHdqxpRdZL9Ow/ibTkOU7oOY7GYzwfQv4EuV2ll/SRT9Le53sVXsUujq5oGr2l8O9l72/UuD1SBHSJChF+JLz346b7zMepFFpSVv8VpmguGUMdhvCIUGvUgf4YZ82g56deIFXLURRcKfD+jdJkJmiiCDg0w3DIhp4t9JIWBry72NEKp/ffb29vvz9FH2LkcvuT9MrnTt+8OcXBC9JlOUSjjnt8aERO9BLOl98dHm6ja0yScaJskcZxCPPL83EqhRnLpJr/FepF4D8+f4Dw7K0aLVFKf0rCcG9yYWEJCNFxDN8ePg5IS9P21Ykimn+cAIfWqzf6wtCzHqo/E/JtfuTDgZxIJGQZ/XtyX6AaOp+kVrmUwJC5Ay8OQKmexAXhduIDkBnczAEimlzUDpJTcFX3orEYTzkbtOhZ5M7bO+dXEV9Ehe/qI+KIRlE/JIEZXO+NxXqpzCzfefXqTgjeZEaPWYqQQyMqO2xQ9A9dsG71AofmPUHcaGGClmYmewkvy1HaF5g2kF/T5AEFBijcosPW4k35MBQnF7UGGfVsxbDuUHuyZy18XPmMKAAnssGb8Wi0lxizrWQ/+e1QFIkMpT9zE0VXkQAy9iBqA+2bKDqkkcu8IZrf6nr2QxQ4NCOM4krF7um+bDY72U/EFFpVzxjZkRbF6IQSnKbIu3GiZ7M7Ki57npCvXH4A6dhk9PT+aQikj4sVq2diMLiYGkxnMkNDYEx/A3H9Jh96C9rW3Ds2ZeA7oH01j6UUAYdGZMGgaiQOHJpG0Jrtpp5/YxIpz7SeuieAQ8ORYeL9Q+tvKZjqwvcvkLryCqX+rEIlSKyw8XccDCn+ync31k8+6vLieybQNB+2z0pR4g1waEYkq7uq/M/UwahhMXdSYY/hb0NR1rlrkgQdGq42yXyl2pgKJkTQAn+QYXfZUwQTd4jJJBXAeWSw3lKrZmQa/l8E6qqAQ9Pn9QlFwKHdN+6ZrmcTUdqsmh6YJo0I+t4Jivnip7BihZiSIwqeK5SgVYzJp7Q/rawHKbKtwforbowCnWw50CUCT2BYHf8FoChdkSLg0LI/G2ZJb5wTqMueYLdgZDH9d5QImJOTbpzp0dCEY02TDbq9IaqHaiXi5TUU+X1/+alSa/PAofkDKOGl95BMm1wJVPihw9TiIurQiMpOE4r6tSG/AM0iIViteHEbHAoyzBkRSjZe05Jjn2qKKuWcKgZeAEZX9cFVU7TI1Wmlsj8yrEnSF4qoIndBSyTTEKl8MA5Tq8yeWB3a1GO2/LgKXLaHk3eZjAdlafRzUb6BOIqaRUS+TUuO2JYlYqb6GosCYNTjtVC0b8nQXglsUZvJHJdokIoEJPIAZH+kJZEGPHBGTs/R9ExffkwHMWuiyAv0os/7GzAj88cKytJoclLwyqeYo2M2uZ0FJUfVNAkWSYPYATmv6kAxRTbqYcjQKwEI5dDCXAxlaTQb6KF1JuTjfc+BjhPfdcXbOkw90y9YHVpphIfFgg3kYMgV5kEqf4uPoTQNZQ7kq5fIUGGOlOQmFLX8t7RSMas6KNrg8pMeFoc7sL9unSIwInN0jaIaarrWce6IQI/E6S+RYvk+xqzJnv8cBBmgdb1epFcdoUOTR3iQr6NE4pRq6sA7ImBDMeX+9uPHCk9tuXo92zhHUmBilO2ld7KkugZ62ze1SyIQDlCIQG+DVjd+KcB4i6XI9xxo4fDPKEvDWSyRikmQGAQCXb44oGhRl0dkoMgx6ND0qqNeu4YOzTsCrhqJugwmj2bjRM/+6wXO0hJvFMYUI7Zf4tSWj4WotsUp5VpndJzLKAGLKQQ8LzMhQkEfHayY7UGOcGhMCT/yoxztLcz3+nuJ7cH5rw8kb6Qh36/UeORA4/ryGT1F2hWIaE57bwCni0vVYJbwv+lwNCuGRIzYFT0rkxOvT5nqhofeVDVURRSRMU3LCRboNOhPW4SCSIM+cB9Yo8hTZPtIYItP+JAUUTGcp8laTqUIGH5DYkSBtg0rmsFBcFmMQ5NvhEARakeGDuZnqo87uobS6yETTnLiQwjUAT1RyginBcvAq5vmcTmmP90MnIYUUMEY3Q/qNjUQDv/PFqgN4WsOCDBxX6YVRpzCI/6AK5rR+LgLvAt0Bvo8mpaBIIdGrmJWvg00a4yDLruvl1KkbVJzEKPtF+lEtHzCg5U4vVT/8RYYCYUH85drzOT15cYl6E9fhCKPCDwz47kn4lekBSWxnPMsx6i/OBOR7RUUoARL9CROWn0fwZ1D1kgKBqUV6Fr2QZJsPHJldWiIImq+ipy8TRO/fJxSNKbycQO47wLXPVDSZ+Llf9BK6y0q7J7sbKk0cczozdSlMXu/OjWGvMU2dKAaRa8tMxy5VLmcUrOyYyBFOSnsfxDvAdfcQ0MmHClGnoWYmCw9Ps6mdkCIAqLBiO7QaM1PPhToLeMQfdRUTsXASMdmS6vMpNklpx7uxrPxG2DOer7XFAZtKmwql813b3TntTnwMRn0RyZCkW2757HHQ2CLPOmZoyUmco3SjnBNOvJUMM85M4AlTbKSr6gZUCKPWQ5RRIQR3UYw7eeZhQ7BAnnH/vgxKGqp+F8UTFWahOiWgYM3ViIltgVYvWYQrTiF5sE+nxgQNYVHashbFikAqA4tHA4Dn6/ZWOjQ8pgikmlPYPqoayrx5qURAEO9f7U9PpY0X4PM83ylqaziixDozzBSB0iMYnbzT57hKF9FLvqpjuv+S6h6l7FDC++l1HCArFLDFlG+DRwaJ3+gMmWa9kMhUrLSlB4ajn2Jo8TH2BMo8kJCUaEesvoS9EfseOK9AKMIgPk4z9bx2LO9phQez0rGbblWgUx6cHxmZh97P7rw2uzQkNclcSSK/+G0X5/8hvG+GvrJcGxVoYjS/yfMkWkOVwSS9jcT9gce4OFQVBmzk+DlGG+Vi0lDjZdpsqal8P4LO64JZ0eiuLiYOhsvrwTA8v1Vk0PD/sMIvVaxw6UJTN6LMvmkSWvuGZ+X6XwaAKKcN9mRDSyoKL6z0w8kYaA/StHn51jV7lnv//c4bTHVOidJJLJEBUxPN1DCwsdMM2uPSLOBgDizMpg7m1kUwYYGAxzj0LBqCbpPwXcxcZ+W4qdwKsDDSRdP/0NieLd6PRb0/5+MWkAZAbTOuMfH+IqfWO3stHwfOFC6qutT3y/qhJdF9C7wYR4UpPFqLWIoeigZRgqP5yVjj4C56H9I/BE26YHxGak8jhSOrt5HAS/KK4dvqZjOqxTF19Hfw2NqKV4xzo2NTXgTI2qxwxjQ+tw75E/6MfLT95Sl+X5oqYYX7vViNcYiQ+VobOpS91GopScLkLuh9SK6XbHJSa2/Prq0lvvMjzjCqR+/DH4xOVj2P1M5Sm7ph4d+7EHWCY8ol8uNxTe1tibTaSOziJyrPW/q319/9CvfM6xewnAOmyBxZTw1vh9gtnxQiw3xKEL8W1mrg+KP8V5Zyxa0c9HYb2oU9wanX1F+aXNz61FcOUSuJo4R414gJY/Fk3G+Z27u+Ph47mE8zm/LWv6AOVKWlheWN+f4F7oBPlTnQWNRZW5rc3l5eXNrLhRV1P7U7qLx32BagsO+i4faL/jjzYWFheWtR0pvF9KetypHSrRnC42p55//VCdj4/FolySiKEhr61eRBjy+V2otIsrPLR3fiyt3L/RLiH8tBvWsJhyggSNGAYXTOh6rl/RS+3AbftAmnr1qsQMPCaflodOXiV39JJ94jf/TZtRVhIQ3uwn9AtXcX8E5PS8YVy2fjOhL8fAJlO3zgnA/Ie+a+tNNEX72yO+/y6u/ULRf8MIz9XmbZ+qI8GH+uyvfK/3n3/m6Is+Nth7AB3MiF2+1jnle+HiBpFPHXfgl5nm0bu/rGzp2VVZOtA/aEF8a527I+u1/uY1n6gVlGzNwcOO2ikNZPvlw4702i4+GfLp9eJKQCR03FO3w/dsH5KA34f2wfWqMj38z8uEENbj7eETDY/pF8uxRJHL+4In+g4fPn55r5sV38Uzt9e2dC8TkxV0Nr/wolr6j45x5MMfvO3/2UP+B33+u/+DpBfxOkJmUw7PqOvQrAn97TefwkcTJwQGnT1uDs7JW2JDVuX7wfe0nL1+i3ySYo/i4F514eXDCJdjOZeb3dNsQvHjv6uL8/KrLFyFr1fyRyNXVVUCfttam9tW/IxHwgSEJNYOYUo/7jS8x32CfQnf+CWvv55/WB2b4Tuz4aNoKy4Xn9D/1RepCuxmxwPScvht7Xjp+zXXCtNuDp+A8RR246SWEZZMnF3ae6chdLymsG6g7/9KGTt2xUIN1/yJXXrDTyRs+gPzsD4NtD7Oxxph1Xoyu2erazU2vbbeZdeMlO5/VCBdeTmi7WXHBcYpq3ebJ+Y18Kuwu78b2oDWhUzYHdUeMakIHbDXX4WLUQULk8Ux0JEedscGsjo7cZ9aFveer7L3fiRvNdtwrwNx4vd41cPKd3ypssjMIN7aa/bwqXHlH2mgqlar4FjDnX/3FfVbTvk6OATv8L3KDmS8qypHTDCGOnE8vqiAQHvWk06lMKl3R8Te2NVFT6Kj3OOAdDtLpL77IVKbIFVXrnMKRFld/kfPkKiuaK4UjqVPK2IEu1UpXNdceV9746fyL4iqgcubB4l/tJegUkk01tnPMkbUA6TxDtbzu08CO0xQhjixw/i07Z7Uz5Mk6TpG1AOl49hoI1/MmdPdf0uzGy5lrNNUGXIggGYa+dNx+X/OiTxtMucmRGwzV7MwoXKwduRADVHzIvzM5+t0w5BpHvyOGXOLod8WQKzbbDYYasNQUjvt+biPl8Kt1AvV7exbTDjOU93gGJScr+mLYshqtXmR3HBQkbVv1dMC5Um34rK6sowIcy/u5kt7j6L5138b2QKojt68GhxwbV6Rdlh1RtkAzrozFdAvesHM9mJ3HBoPtV7ZwV9NmCKDtysatmrYGz6y027NJi9XK0/Wj29tWkrgpa5cpqW2vrOrCrysYt3bZHLJtFCSLCGlAgtQuixSQFlvhyczIn7SHJM7bXanL8XB7LFKwpVYIYqAdZhs6MgtGy23QtnDrHJkV2ZavY+MK1ndlMEgftZgksT06RjFm3myoOYJKlbaWB8jtt5AkUTqqs0TtKkk1EYSRW2nJO/TUl/O1nyCMsYkW2CSOK5hfOFMF6cXmX8cYCEszzhCEkR1o0rtx3qKtn6+MTDkcbEbfRKlrr702yIJ8oWFR4rjVim6+GgaPpAZZEoPSYpNVocawsdoASxxXmqpTgCgyqf36WQoHpZVxhwWIIrtRqPUFcho93OpGw/xoyKSOJKnmt+mKYSm46B4/Oqa1/eVqoKdUrLCNeL3I7e3jl8BVt9/qHvxHe+0Ko+vF9MbsWqVXCarH1yamanTwNWI0l5o5QxwEzS8cDODXEAbRmX19u75OQl9+ozixegnXeHgvSxPFjfw1AXTjSOdSezMrZ6JEETg7mtkbz7mtW9chq8HBHkczKkZbWwHS8P/fU8wZCxk47wAAAABJRU5ErkJggg=="
                    alt="MasterCard"
                    className="h-12 w-auto rounded shadow"
                    style={{ width: '80px', height: '30px' }}
                  />
                  <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAA/FBMVEX///8AL4cBnN8BImkAmt7///0ALIb//v8AKYYAL4gAmd9MZqEAnN4DK3mI0fYAmdwAIoOY1fiJmsQAI4KisNMIPI8KpObk9f0AMIYAKoUAH4KXps4Alt4AGoEKOI/j6fIBF2EIo9/y9fkAFX5GYaLu+/6tuNMAGX0FbKzt8ffg5fFNsuZbcqu2wtxie7N3jLsnRpLL1OiYp8g6Vp0DJHEAGGxlga5av/G84/ym2fTE5vMEicphdq53x/HW8PwEJmwDQ4Q2sOkDer4EM3cBCVu8x90AO49Rb7CZ2vTR2egFSowrTpcEWpqByvMFNIA8WZsEYKsCc7kHgMcABoHsQkh6AAANsklEQVR4nO2ci1vqRhbAgWZCElMSeYQQAwgKXhTxdXsBr7AXW/W6rmu7/f//l508zmQmL7Cr0m/v+X39WgnJZHJy5jyHFgoIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDItinv7WQxObs8fexve4LbgxQmB0omNbN90BnXu/S0H5JHxS7moBaLiiN/Od72NLfDqZMnmwDZVPa2Pc+tsGeuFw4Vz9H4R7Q9E2UT4RRV82HbM90Ch5sJp1h0zrY91Q9ndC5vKJyiebHtyX40xxvLRlXG257sR3OxgbMCao/bnu0HU99cOKpz+YMFg2e1jYVjK5MfTDjjTZ0VpXW47dl+LP2n1iuEc1Xe9nw/lK6qikvHLqoxbB9fOC/9H2pZxZ2Vav+cJBCOqv5owhkeiXrz+acsPv9sKw8/lGwK1VjamSkbj1++FP5v3VXac4lpp23nCmf/03SwVjjHe1WRvcu74/fI6MmsEmN3ft0skFe9PjbIdfK78pXgrOyf84XzVeot1yhPt+PUTLNmhv+q0f86badxc9p/a6Wbu5pr8Gj0H321WL5iDLLUtOBafZD4ctQRUqsck+PxD60kWQOS689FIwZmXlacq7vXPv0aTrRSEknStGlz89cwc8MLraRwjg+KrxDON71U0qb5d8uKuO2WWX3t4+cy6EkpwqHoWu96Yy3dDSUsnSS/i9dIc4Wz/0n3hslX2+yIWz66fL0IMiHNkp4unFLJKC03Fc4ChLNI3KCwZwrV9TX22PWmYySG4elfZUfccvsNy/TUWmQKR0rTg/RRVqH6abtxcRIiOis135N/s7zpaL28u3XVLNFQam9YSyRzN0s2FDfF+aTB1qY2S+gaOZT5h1FzndX+re4JRy81c+726DBVbHmNr5Zc5HRTLr+ZxyIVZo91TdIMSeIVSctV74imAcqWYixEZ5UvnF/1cCp5b+W0zWSzM5lMxi8NzkDbB29XLSNTEI5Umi6m05OVxHkvabXZKDMwOSnOqtsWZKPmKw4s6KQGRrBGD5Q3RvWODLpjt9/QnYO10LXvwXyWi8h96aXCRgWE7y4TZuL8O1E4efZ4/5vV20A4X0BRIvtyqjD1dIavlkEWA4stqutwPmQRrTQpqQlpLMJlpU2TzyTWSHOF8wuszlLesuofgrNy6uxg5MCO3k44y8geMxu4ZHZHlzYbZRVeYFSSWYcYseUJ57fb6E3lBDqj+1BL7KOojxOFPm+4rMBalPQVKAlp6mxhWRsNQsJYSXdnybhfbOjlZFa/fbLgpUh6jrc6dkLvZytRTDMGzbHbYJBJYXQx3KvuDS9GBSFZKwufhLdJhL8gtC1pUUzTjCxyYJBJmSpEczavVL7Plr5usEE8YZCBlvPCY5lVpnCobNhttV6OqWNGTD6PEvEXJhwTDtZfjtqOl5W2nReqTY/nDY/7TpVO/rhxH3x4EHP58uQ+PMtbnGAt+KA0WlZwkDSfe5qP4UoL+lZ3rZ6P5RvOa7Y2U9JOwR4X1YzkYX//NpJNyciLPi9hnSo77Fi3CLFU6yqYcV1tK3BMbR3cFM4c2UdpUEW6PAo+yM5EGPusHR6veV17lnZqcziBzJlB1nb9A4OFFvl3SXPnhR4NiDyCQAgukFIC24sjMZ7NMMXfDIvL8bTvOcJhRkz5wo5FKUrNTz27O2K2W2yfjUMNbh2WuWRY7vCqc2fCivXb0j0W5jD/wHIBGiH7y2RmxVIM7Tu85UB6z+Eg2ipujsuFoSNmVimas7//621PvEFeUrfDnFWYZJLCY7R2D7yneuwk8nYWCNX8xhh071W+OR/19NtVb7mAHCSIbQlhZijQBPo5nrfrzJvp/rI6CU8wnuMPQgrVNWnn/v7nf97qsezXyikHlBvwBE7ol/qnjVaYQKjyE9WLR1VOpF+qHZ4RVDUgkLTNs+heZ3BQOaT6RK5dHeQQmotmJRKF5nnmXTeRmbIDevCKIbNy5/EnIYUHMe20P+8Dv+z/tv/5279ujURdQHvOLnaRETgrtVUd1of1vcmTw/RGbde96hqftauxxlD71Bume8CkyYY+ddiZvsdj5kXqzT0qUyvSE91qEjLjZUOtjPAUhp8uDEognEToRgoN3lnZxc8/fQJub7/SsS0rWTPR8spsF5GFrzmOSf0RXTGhdqpFz4Ht1JiyKkeOqrYdfg7moz8viBpVBVw/xE+qfeT368mzkHZqrqbr0VRdukqa7ICkay79W+Oz+CD3YoGkm3yosmgY1X/rLNDLLCQZuYXAupO9+VL1IsBTdkv5YHza7fe7Qy4zle+7/jCXELg7sBPxBhaVb7KpcE4yyoD+k1sDQqbg6nVder4eFAbLCue5gnomCyRLSVPxKAqn9dWK3yaOrru5NbZ4o4dXzAOabJH7UFCqLHvG1ovLymMmndZLsGK7MLEgIKCeg83UDsRHsmqkpbBswGySrp34RoneqRktBK3iHWM10lVSOKdiLbxlpN5LvG8ltyDzkF0jbXuOiFXfZbXLLiLMDyk34SGI3OWOdxoZgczVdpicDbLnKLkzr6ABwqM6AlMmS2aGtJl3IDxJ1xbJp7oU33Mns+zIMNaUSRpZ28SUwA/BQ6ttfgfdECxVDUrwsDztQBgPYKhqEBYus8qAumF5xpUlErxSEOa6S166UIa4SHcTNdJ4Q09+Wi+bXn7TY5S6qlS5Zr74wugWQ+HVhA10XfBErKLRDQdS/cCnDvrWuh+F98+okVLTvPCnyJyZO+PvxNaR5eWHfTDZ1FklPPCT8J5bv6/RHPpSlvktD96Itfx0QG7VTKcxuQsyPuaPxey8K4euKAr6dmBdUQ8X7Vps30HmWIlMgCRRv6RrBhWMtHoOTSKsKq0ntGjnvJEhSybBZNpZFj2L8scavXFXecVjD2bEVFk59NgZ35zV/cTbpxqaXlUZ8Zd1w8NykWXyUGhSnYtIUFxMyPki6yRgUZkvB+EJZBV+r08LqcLx8kMSVT1SGnpiGF/7mqM5eskoVdYW15gRszt+gBLXVVjHckMotEN0xGXybNtQrVqHnEp+gq8JYQUU40SclT8uiZoKFe67MlkwC+x95pxVgrs2rzpqnrOSXGm6Zkl53IARy9g8CJmXfC6IDRRKiXbVEVYgO2/ALNtRdZ6whDK9LNlk+SUvHFLoBZdJxtybHmvoJWK3cixisztGXHN0upol3aDx52p3o5Is88lcjTRNOEWF2wRF+pAY8G0tlhPLLN/kfprCnJUkpS11EglnypU/2ToKGyiQxLu7iQGiWnj4imKi0SRLt6zVarpL48tN9nWQMjyQaqaXQ5k6CAb5pgbOihNptxOLCpTDcjQJ1v5PK8QUPM0Bn823XAbsaFDMZBKcJUd4ERq3rd/F+FiarjO/cUj3ANJOpZt6Bqv28HXCKlhx2+GDn3jPXeVbyaw4kd6fojaHLbtneLFkYDEr7ouUVZyTNVLSFyO21h+CcPz8hLxuI9BdG0xnJ/2EIeRMtvkSPuvxQ1Rwk4/TzmVaxc2FNfRobJsyRUJYnVDSwI/MrMhu+CK9BpOT5qyKvHBU5T+CydGm6+1vnD14ntZV+sXHUQdLUW4uh8PqjhkpiNzgC3+jDlfNUMWokVmLkvY9vYCyGwWJbm8xn80XK64fGlSY51FDL8GFKdRSWl+FVWVUXi+cCauRZu103+FWsuIVNVrFaBJhhRkYK9FXckNcp2A8pKwNA81SlJh6+5lcg2+lGzRdIAVokApGOySmtx3RkxuJ2th6oAxjm1m/eRSjhxiKWE/ntg6pzqnw1ZIZVjfLMC60UjaeBY4SLcHdh4jlBfk85sg33MPBY0NDjzqjVM0hhXG8fqwWWfUrJtJ+5K9MUWzMWlCfnDEV6szjYZsuseDISxdImTXbU/RgHEs7RXucu88knS578OxNSv37eFHj4AyOxNSDq380YnvD5/nOquC9hlk8NTV6UzAyuncKc/dpcWQ87RQ9+WbtVIE7port7JNG5/5q8bTFpjbFVC/CbNRWHXF/yrEKEzy4iCUirKGX1v/3IV4NWWOGR6JqMyUnYe83KGNABzBtaY4a4oK/FWSz6f4Wnrs/zYCDSc5Z5EwxFdkrBcqKY1f7hWF42ZHo4spXIJujxH6wqRF0MTV3nu01yHJFU3W/tC4Z2oqamZXrXyS5u8TLycNB3BQBd1Whut4S08602thahnsBp/nXdvcOGzRt75yPh57vLteDq+q8IyeFqhP2a1pPCQM22A2ZZwdiZXrV9WJlWTRkWy287aWkGV7lm2OaTIRjpPyeo3/VNiMcR8ysko2ct4M+UP+YEg9QhDnesWA65beTEPOui1Hp94PmcjmAE2OXkWioOKO6gC4K5/ovaE45uueaSace5I+OzqGg6qTszyWk7PPa+8BlIKTsMcQrYxtXtdc7qzdlAsZdeXi7PZZ/ldjGVT2lkfORsJJ7sfM3+D+McBtXA2e1VdmwHMxuv90+ub9OtHE1CJjW/MDhfedSeAFHat6sP/39Ka+EDqKWqI19JFXIwOTGaP3Z789AN3SGJKX0Kj6O7p/hDq633F/5P1GxeHICz/enf94Jqb7yZ3fvBWlybLbB+d2m0u8GjP4WkvEgPFueSspfCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgIv8FtMQ+QOkJDaUAAAAASUVORK5CYII="
                    alt="PayPal"
                    className="h-12 w-auto rounded shadow"
                    style={{ width: '100px', height: '50px' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                id="checkout"
                style={{color:'#42182ca3'}}
              >
                 Proceed to Checkout
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
