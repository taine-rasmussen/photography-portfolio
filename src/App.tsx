import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { themeConfig } from './themeConfig';
import Overview from './Overview';
import Contact from './Contact';
import { FC } from 'react';
import Work from './Work';
import './App.css'


const  App: FC = () => {

  const theme = createTheme(themeConfig)

  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
