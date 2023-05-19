import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> {/*sempre vai ser carreagdor,componente estatico*/}
        
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Login />} />  {/*muda de acordo com o caminho,rota*/}
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            </Routes>
          </div>
        
        <Footer /> {/*sempre vai ser carregado,componente estatico*/}
      </BrowserRouter>
    </>
  );
}

export default App;
