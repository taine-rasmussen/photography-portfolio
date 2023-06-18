import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Contact from './Contact';
import { FC } from 'react';
import Work from './Work';
import './App.css'


const  App: FC = () => {

  return (
    <div className='app'>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
