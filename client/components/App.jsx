import React, { useState } from 'react'

// Components
import Header from './Header'
import Street from './Street'
import Portrait from './Portrait'


const App = () => {

  return (
    <>
      <div className='app'>
        <Header />
        <Street />
        <Portrait />
      </div>
    </>
  )
}

export default App
