import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrossel';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import useLocalStorage from 'react-use-localstorage';

function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
  
    return (
        <>

             <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens' >
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagem'>
                 </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>    
            {/* /*ctrl ; comenta tudo */ }

            {/* <Grid container style={{ marginTop: "0px" }}>
                <Grid item xs={12}>
                   <img className='img' src="https://blueedtech.com.br/wp-content/uploads/2021/07/motivos_programar-scaled.jpg" alt="" width="700px" height="500px"/>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: "0px" }}>
                <Grid item xs={4}>
                   <img  src="https://blueedtech.com.br/wp-content/uploads/2021/07/motivos_programar-scaled.jpg" alt="" width="571px" height="500px"/>
                </Grid>
            </Grid>*/}
            <Grid container style={{ marginTop: "0px" }}>
                <Grid item xs={12}>
                   <Carrossel />
                </Grid>
            </Grid> 
        </>
    );
}

export default Home;