import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

function App() {

  return (
   <>
      <BrowserRouter>
         <Navbar/> {/*sempre vai ser carreagdor,componente estatico*/}
           <Routes>
             <Route path="/" element={<Home/>}/>  {/*muda de acordo com o caminho,rota*/}
             <Route path="/home" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
           </Routes>
          <Footer/> {/*sempre vai ser carregado,componente estatico*/}
      </BrowserRouter>
   </>
  );
}

export default App;
