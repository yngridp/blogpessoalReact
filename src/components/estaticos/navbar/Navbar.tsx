import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css';


function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (
        <>
            {/* </><Box style={{ backgroundColor:"#4F4F4F" }} > */}


            <AppBar position="static" style={{ background: "#2D232B" }}>
                <Toolbar variant="dense">
                    <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                        <Grid alignItems="center" item xs={8}>
                            <Box className='cursor' >
                                <Typography variant="h2" color="inherit">
                                    BlogPessoal
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
                        <Grid alignItems="flex-start" item xs={8}>
                            <Box display="flex" justifyContent="start">
                                <Link to='/home' className='text-decorator-none'>
                                    <Box mx={3} className='cursor'>
                                        <Typography variant="h6" color="inherit">
                                            HOME
                                        </Typography>
                                    </Box>
                                </Link>

                                <Link to='/formularioPostagem' className='text-decorator-none'>
                                    <Box mx={3} className='cursor'>
                                        <Typography variant="h6" style={{ color: "yellow" }}>
                                            CRIAR POSTAGEM
                                        </Typography>
                                    </Box>
                                </Link>

                                <Link to='/postagens' className='text-decorator-none'>
                                    <Box mx={3} className='cursor'>
                                        <Typography variant="h6" color="inherit">
                                            POSTAGENS
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to='/tema' className='text-decorator-none'>
                                    <Box mx={3} className='cursor'>
                                        <Typography variant="h6" color="inherit">
                                            TEMAS
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to='/formularioTema' className='text-decorator-none'>
                                    <Box mx={2} className='cursor'>
                                        <Typography variant="h6" color="inherit">
                                            CADASTRAR TEMA
                                        </Typography>
                                    </Box>
                                </Link>

                                <Box mx={3} className='cursor' onClick={goLogout}>
                                    <Typography variant="h6" color="inherit">
                                        LOGOUT
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>


                </Toolbar>
            </AppBar >

        </>
    )
}

export default Navbar;