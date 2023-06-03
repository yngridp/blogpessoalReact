import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';
import { toast } from 'react-toastify';


function Navbar() {
    //const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário Desconectado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent =
            <AppBar position="static" style={{ background: "#420f0c" }}>
                <Toolbar variant="dense">
                    <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                        <Grid alignItems="center" item xs={6}>
                            <Box className="opcaoHome" mx={1} >
                                <Typography variant="h4" className='blog' component="h3" align="center">
                                    BlogPessoal
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
                        <Grid alignItems="flex-start" item xs={6}>
                            <Box display="flex" justifyContent="start">
                                <Link to='/home' className='text-decorator-none'>
                                    <Box className="itens" mx={1}>
                                        <Typography variant="h6" className='blog' component="h3" color="inherit">
                                            HOME
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to='/postagens' className='text-decorator-none'>
                                    <Box className="itens" mx={1}>
                                        <Typography variant="h6" className='blog' component="h3" color="inherit">
                                            POSTAGENS
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to='/tema' className='text-decorator-none'>
                                    <Box className="itens" mx={1}>
                                        <Typography variant="h6" className='blog' component="h3" color="inherit">
                                            TEMAS
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to='/formularioTema' className='text-decorator-none'>
                                    <Box className="itens" mx={1}>
                                        <Typography variant="h6" className='criar' component="h3" color="inherit">
                                            CADASTRAR TEMA
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to="/perfil" className="text-decorator-none">
                                    <Box className="itens" mx={1}>
                                        <Typography variant="h6" className='blog' component="h3" color="inherit">
                                            Perfil
                                        </Typography>
                                    </Box>
                                </Link>

                                <Box className="itens" mx={1} onClick={goLogout}>
                                    <Typography variant="h6" className='blog' component="h3" color="inherit">
                                        LOGOUT
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>


                </Toolbar>
            </AppBar >
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;