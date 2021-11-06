import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// Components
import Street from './Street'
import Portrait from './Portrait'
import Landing from './Landing'


const App = () => {

  const [view, setView] = useState(false)

  return (
    <>
      <div className='app'>
         <Route exact path='/' component={Landing}/> 
         <Route exact path='/street' component={Street}/> 
         <Route exact path='/Portrait' component={Portrait}/> 
      </div>
    </>
  )
}

export default App
