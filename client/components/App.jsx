import React, { useState } from 'react'

// Components
import Header from './Header'
import Street from './Street'
import Portrait from './Portrait'


const App = () => {

  const [view, setView] = useState(false)

  return (
    <>
      <div className='app'>
        <Header view={view} setView={setView}/>
        {view ? <Portrait /> : <Street />}
      </div>
    </>
  )
}

export default App
