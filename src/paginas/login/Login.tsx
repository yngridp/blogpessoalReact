import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { addId, addToken } from '../../store/token/Actions';
import './Login.css';

function Login() {
    
    let navigate = useNavigate();
    
    const dispatch = useDispatch();
   
   const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario: '',
            foto: "",
            senha: '',
            token: ''
        })
        const [respUserLogin, setRespUserLogin] = useState<UserLogin>({

            id: 0,
            nome: '',
            usuario: '',
            foto: "",
            senha: '',
            token: ''
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
            console.log(Object.values(userLogin))
        }
    
        useEffect(() => {
            if (respUserLogin.token !== "") {
    
                console.log("Token: " + respUserLogin.token)
                console.log("ID: " + respUserLogin.id)
    
                dispatch(addToken(respUserLogin.token))
                dispatch(addId(respUserLogin.id.toString()))    
                navigate('/home')
            }
        }, [respUserLogin.token])
    
        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setRespUserLogin)
                toast.success('Usuário logado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }catch(error){
                toast.error('Erro ao efetuar login! Verifique os dados do Usuário!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'  className='fundo'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Entrar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;

