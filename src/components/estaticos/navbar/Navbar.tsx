import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <>
         {/* </><Box style={{ backgroundColor:"#4F4F4F" }} > */}
          

            <AppBar position="static" style={{ background:"#2D232B" }}>
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

                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" style={{ color: "yellow" }}>
                                CRIAR POSTAGEM
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                POSTAGENS
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMA
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    LOGOUT
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Grid>
              </Grid>
                    
                 
                </Toolbar>
            </AppBar >

        </>
    )
}

export default Navbar;