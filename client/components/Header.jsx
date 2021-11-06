import React from 'react'
import '../styles/Header.css'

const Header = ({view, setView}) => {

   return(
      <div className='header-container'>
         <div className='header-title-container'>
            <h1>Taine Rasmussen</h1>
         </div>
         <div className='header-item-container'>
            <ul>
               <li>Home</li>
               <li onClick={() => setView(true)}>Portrait</li>
               <li onClick={() => setView(false)}>Street</li>
            </ul>
         </div>
      </div>
   )
}

export default Header
