import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landing.css'

const Landing = () => {

   return (
      <div className="landing-container">
         <div className="landing-header-container">
            <h1>Taine Rasmussen</h1>
         </div>
         <div className="landing-links-container">
            <ul>
               <Link to='street'>
                  <li>Street</li>
               </Link>
               <Link to='portrait'>
                  <li>Portrait</li>
               </Link>
            </ul>
         </div>
      </div>
   )
}

export default Landing