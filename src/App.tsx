import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

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
              <Route path="/tema" element={<ListaTema />} />
              <Route path="/postagens" element={<ListaPostagem />} />

              <Route path="/formularioPostagem" element={<CadastroPost />} />

<Route path="/formularioPostagem/:id" element={<CadastroPost />} />

<Route path="/formularioTema" element={<CadastroTema />} />

<Route path="/formularioTema/:id" element={<CadastroTema />} />

<Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

<Route path="/deletarTema/:id" element={<DeletarTema />} />

            </Routes>
          </div>
        
        <Footer /> {/*sempre vai ser carregado,componente estatico*/}
      </BrowserRouter>
    </>
  );
}

export default App;
