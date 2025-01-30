import React from 'react'
import view from '../assets/view1.png'
import '../styles/home.css'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'

function Home() {
  
  return (
  <>
<div className='container'>
    <div className="part1"><br/><br/>
        <h2 style={{fontSize:"40",fontWeight:"400"}}>Grap your favorite </h2>
        <h1 style={{fontSize:"40px",fontWeight:"800",color:'#d57e7f'}}>LUFFY DONUTS</h1>
        <p style={{fontWeight:'550',fontSize:"17px"}} className='description'>where every bite is a sweet adventure! Indulge in our irresistible, mouth-watering donuts today.</p>
        <ScrollLink to="menu" smooth={true} duration={500}>
  <button className="order">Order Now</button>
</ScrollLink>

        <ul style={{listStyleType:'none',display:'flex',marginBlock:"30px"}}>
        <li><FaFacebook className='sm-icons'/></li>
        <li><FaInstagram className='sm-icons'/></li>
        <li><FaTiktok className='sm-icons'/></li>
    </ul>
    </div>
        <div className="part2">
        <img src={view} alt=""  className='view1'/>
    </div>
  
</div>  
   
    </>
  )
}

export default Home
