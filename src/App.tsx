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
import store from './store/Store';
import Perfil from './paginas/perfil/Perfil';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import AtualizarUsuario from './components/usuarios/atulizarusuario/AtualizarUsuario';

function App() {
  const THEME = createTheme({
    palette: {
      primary: {
        light: '#420f0c',
        main: '#420f0c',
        dark: '#c98d89',
        contrastText: '#ecd3b4',
      },
      secondary: {
        light: '#BBABC1',
        main: '#fbfe30',
        dark: '#504455',
        contrastText: '#ffff',
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={THEME}>
        <Provider store={store}>
          <ToastContainer />
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
                <Route path="/perfil" element={<Perfil />} />
            <Route path="/atualizarusuario" element={<AtualizarUsuario />} />
            {/* <Route path="/postagensportitulo" element={<ListaPostagemPorTitulo />} /> */}

              </Routes>
            </div>

            <Footer /> {/*sempre vai ser carregado,componente estatico*/}
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
