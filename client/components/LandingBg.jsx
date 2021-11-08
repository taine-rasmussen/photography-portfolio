import React from 'react'
import ParallaxMousemove from 'react-parallax-mousemove'


const LandingBg = () => {

   const style = {
      container: {
        position: 'relative',
      },
      image: {
        position: 'absolute',
        height: '100%',
      }
   }



   return (
      <div className='landing-bg-container'>  
         <ParallaxMousemove containerStyle={style.container} fullHeight={true}>
            <ParallaxMousemove.Layer layerStyle={style.image}
               config={{
               xFactor: 1,
               yFactor: 0.3,
               springSettings: {
                  stiffness: 50,
                  damping: 10
               }
            }}>
               <img src="/Images/profile.jpeg" alt="?"/>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.image}
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
            <ParallaxMousemove.Layer layerStyle={style.image}
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
             <ParallaxMousemove.Layer layerStyle={style.image}
               config={{
               xFactor: 1,
               yFactor: 0.3,
               springSettings: {
                  stiffness: 50,
                  damping: 10
               }
            }}>
               <img src="/Images/profile.jpeg" alt="?"/>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.image}
               config={{
               xFactor: 0.3,
               yFactor: 0.3,
               springSettings: {
                  stiffness: 90,
                  damping: 36
               }
            }}>
               <img src="/Images/profile.jpeg" alt="?"/>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.image}
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
             <ParallaxMousemove.Layer layerStyle={style.image}
               config={{
               xFactor: 0.3,
               yFactor: 0.4,
               springSettings: {
                  stiffness: 20,
                  damping: 60
               }
            }}>
               <img src="/Images/profile.jpeg" alt="?"/>
            </ParallaxMousemove.Layer>
         </ParallaxMousemove>
      </div>
   )
}

export default LandingBg
