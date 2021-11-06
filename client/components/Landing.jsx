import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landing.css'

// components
import LandingBg from './LandingBg'

const Landing = () => {

   return (
      <div className="landing-container">
         <div className="landing-header-container">
            <h1>Taine Rasmussen</h1>
         </div>
         <div className="landing-links-container">
               <Link to='street'>
                  <h2>Street</h2>
               </Link>
               <Link to='portrait'>
                  <h2>Portrait</h2>
               </Link>
         </div>
      <LandingBg />
      </div>
   )
}

export default Landing