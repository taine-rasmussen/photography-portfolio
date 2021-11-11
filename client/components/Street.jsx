import React from 'react'
import '../styles/Street.css'

// components
import Header from './Header'


const Street = () => {
   return (
      <>
         <Header />
         <div className='street-container'>
            <div>
               <img src="Images/Street/street6.jpg" alt="street" className="large-street"/>
            </div>
            <div>
               <img src="Images/Street/street2.jpg" alt="street" className="landscape-street"/>
            </div>
            <div>
               <img src="Images/Street/street4.jpg" alt="street" className="landscape-street"/>
            </div>
            <div>
               <img src="Images/Street/street8.jpg" alt="street" className="landscape-street"/>
            </div>
            <div>
               <img src="Images/Street/street20.jpg" alt="street" className="large-street"/>
            </div>
            <div>
               <img src="Images/Street/street14.jpg" alt="street" className="large-street"/>
            </div>
            <div>
               <img src="Images/Street/street2.jpg" alt="street" className="landscape-street"/>
            </div>

         </div>

      </>
   )
}

export default Street