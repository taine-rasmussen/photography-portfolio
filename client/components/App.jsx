import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Street from './Street'
import Portrait from './Portrait'
import Landing from './Landing'


const App = () => {

  return (
    <>
      <div className='app'>
         <Route exact path='/' component={Landing}/> 
         <Route exact path='/street' component={Street}/> 
         <Route exact path='/portrait' component={Portrait}/> 
      </div>
    </>
  )
}

export default App
