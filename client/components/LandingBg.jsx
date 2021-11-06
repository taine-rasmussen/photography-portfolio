import React from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'


const LandingBg = () => {

   const style = {
      outter: {
        position: 'relative',
        overflow: 'hidden'
      },
      bgLayerStyle: {
        position: 'absolute',
        height: '100%',
        transform: 'translate(-15%, 17%)',
      }
   }



   return (
      <div>  
      <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
         <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.3,
              yFactor: 0.3,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
         }}>
            <img src="/Images/profile.jpeg" alt="?"/>
         </ParallaxMousemove.Layer>

          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.3,
              yFactor: 0.3,
              springSettings: {
                stiffness: 90,
                damping: 30
              }
         }}>
            <img src="/Images/profile.jpeg" alt="?"/>
         </ParallaxMousemove.Layer>
         
         <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.3,
              yFactor: 0.3,
              springSettings: {
                stiffness: 20,
                damping: 80
              }
         }}>
            <img src="/Images/profile.jpeg" alt="?"/>
         </ParallaxMousemove.Layer>
      </ParallaxMousemove>
      </div>
   )
}

export default LandingBg
