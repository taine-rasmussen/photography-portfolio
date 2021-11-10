import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {


   return (
      <div className="header-container">
         <div className="header-title-container">
            <h1>Taine Rasmussen</h1>
         </div>
         <div className="header-item-container">
            <ul>
               <Link to=''>
                  <li>Home</li>
               </Link>
               <Link to='portrait'>
                  <li>Portrait</li>
               </Link>
               <Link to='street'>
                  <li>Street</li>
               </Link>
            </ul>
         </div>
      </div>
   )
}

export default Header