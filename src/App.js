import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import CustomProvider, { contexto } from './Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './Component/Main/Index';
import { useContext, useState } from 'react';
import { Contact } from './Component/Main/Contact';
import { Trabajos } from './Component/Main/Trabajos';


function App() {

  const { constacUs } = useContext(contexto)
 



  return (
    <div className="App">
      <BrowserRouter>
        {constacUs ? <Contact /> : null}

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/porfolio' element={<Trabajos />} />
          <Route path='/:id' element={<Index />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

function newApp() {
  return (
    <CustomProvider>
      <App />
    </CustomProvider>
  )
}

export default newApp
