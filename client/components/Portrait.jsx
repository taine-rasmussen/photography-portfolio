import React from 'react'


// Components
import Header from './header'

const Portrait = () => {

   const image = <img src="/Images/profile.jpeg" alt="example"/>
   const portraitImages = [image, image, image, image];



   return (
      <>
         <Header />
         {portraitImages.map((img) => {
            return(
               <div className="portrait-img-container">
                  {img}
               </div>
            )
         })}
      </>
   )
}

export default Portrait