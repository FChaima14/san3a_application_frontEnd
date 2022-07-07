import './App.css'
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Landing from './Pages/landingPage/Landing';
import Details from './Pages/Details/Details';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from './styles/Theme';
import { Container } from '@mui/system';
import NavBar from './components/NavBar/AppBarDesktop'
import ProUp from './components/proUp/ProUp';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'


function App() {
    const [openProps, setOpenProps] =useState(false)
    const [openProps2, setOpenProps2] =useState(false)
    const [openProps3, setOpenProps3] =useState(false)
    //<Home openProps={openProps}  setOpenProps={setOpenProps}
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Container maxWidth='xl'>
           <NavBar setOpenProps={setOpenProps} setOpenProps2={setOpenProps2} setOpenProps3={setOpenProps3} />
            <Routes>
              <Route path="/" element={<Landing setOpenProps3={setOpenProps3}/>} />
              <Route path="Home" element={<Home openProps={openProps}  setOpenProps={setOpenProps}/>} />
              <Route path="Home/search" element={<Home/>} />
              <Route path="Home/:id" element={<Details/>} />
          </Routes>

            <ProUp openProps={openProps2}
                  setOpenProps={setOpenProps2}
                  title=' Login '> 
              <SignIn setOpenProps3={setOpenProps3} setOpenProps2={setOpenProps2} />   
          </ProUp>
            <ProUp openProps={openProps3}
                    setOpenProps={setOpenProps3}
                    title=' Create New Account '> 
                <SignUp setOpenProps3={setOpenProps3} setOpenProps2={setOpenProps2}/>   
            </ProUp>
        </Container>
      </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
