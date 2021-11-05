import React from 'react'
import '../styles/Header.css'

const Header = () => {


   return(
      <div className='header-container'>
         <div className='header-title-container'>
            <h1>Taine Rasmussen</h1>
         </div>
         <div className='header-item-container'>
            <h2>Home</h2>
            <h2>Portairt</h2>
            <h2>Street</h2>
         </div>
      </div>
   )
}

export default Header