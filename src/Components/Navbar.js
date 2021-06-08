import React from 'react'
import logo from '../Assets/images/logo.svg'
import { FaBars, FaYoutube, FaFacebook, FaInstagramSquare, FaGooglePlusG } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Navbar() {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <Link to="/"><img src={logo} alt="Beach Resort" />
               </Link>
               <button type="button" className="nav-btn">
                  <FaBars />
               </button>
            </div>
            <ul className="nav-links">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/rooms">Rooms</Link>
               </li>
            </ul>
            <ul className="nav-socials">
               <li>
                  <Link to=""><FaYoutube /></Link>
               </li>
               <li>
                  <Link to=""><FaFacebook /></Link>
               </li>
               <li>
                  <Link to=""><FaInstagramSquare /></Link>
               </li>
               <li>
                  <Link to=""><FaGooglePlusG /></Link>
               </li>
            </ul>
         </div>
      </nav>

   )
}
