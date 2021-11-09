import React from 'react'
import '../styles/Portrait.css'

// Components

const Portrait = () => {

   const image = <img src="/Images/profile.jpeg" alt="example"/>
   const portraitImages = [image, image, image, image, image, image, image, image];

   return (
      <>
            <div className="portrait-container">
               {portraitImages.map((img, index) => {
                  return(
                     <div className="portrait-img-container" key={index}>
                        {img}
                     </div>
                  )
               })}
           </div>
      </>
   )
}

export default Portrait