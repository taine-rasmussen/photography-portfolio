import React from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'


const LandingBg = () => {
                     
   const imageExample = <img src="/Images/profile.jpeg" alt="example"/>
   const imageArr = [imageExample, imageExample, imageExample]         
   


   return (
      <div className='landing-bg-container'>  
         {imageArr.map((img, index) => {
            return(
               <div key={index}>
                  <ParallaxMousemove containerStyle={{ position: 'relative'}} fullHeight={true}>
                      <ParallaxMousemove.Layer layerStyle={{position: 'absolute', height: '100%',}}
                        config={{
                           xFactor: 0.1,
                           yFactor: 0.1,
                           springSettings: { stiffness: 50, damping: 10 }
                        }}>
                     {img}
                  </ParallaxMousemove.Layer>
                  </ParallaxMousemove>
               </div>
            )
         })}
      </div>
   )
}

export default LandingBg
