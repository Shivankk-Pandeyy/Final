import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='*' element={<ErrorPage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
