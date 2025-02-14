import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  return (
    <div className='navbar'>
<nav
    className="nav justify-content-center ">
   <ScrollLink className='navbar-brand' to='home' smooth={true} duration={200}>
        <img src={logo} alt="donuts store" style={{height:"75px",width:"75px",marginLeft:'25px'}} />    
    </ScrollLink>
{/* #ffffff 
#42182c
#411928
#F19AD1
*/}
    <ScrollLink className='nav-link' style={{color:"#42182c" ,fontWeight:'bold',fontSize:'20px'}} to='/' smooth={true} duration={200}>
        Home    
    </ScrollLink>
    <ScrollLink className='nav-link' style={{color:"#42182c" ,fontWeight:'bold',fontSize:'20px'}} to='menu' smooth={true} duration={200}>
        Menu    
    </ScrollLink>
    <ScrollLink className='nav-link' style={{color:"#42182c" ,fontWeight:'bold',fontSize:'20px'}} to='client' smooth={true} duration={200}>
        Client     
    </ScrollLink>
    <ScrollLink className='nav-link' style={{color:"#42182c" ,fontWeight:'bold',fontSize:'20px'}} to='contact' smooth={true} duration={200}>
        Contact     
    </ScrollLink>
    {/* <ScrollLink className='nav-link' to='cart' smooth={true} duration={200}>
      <TiShoppingCart style={{color:"#42182c" ,height:'30px',width:'30px'}} className='cart' />
          </ScrollLink> */}
   
</nav>


</div>
  )
}

export default Navbar
