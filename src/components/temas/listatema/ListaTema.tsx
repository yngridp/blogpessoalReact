import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import {useNavigate} from 'react-router-dom'
import { busca } from '../../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Actions';

function ListaTema() {
  const[temas, setTemas] = useState<Tema[]>([])

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() =>{
    if(token == ''){
      toast.error('Usuário não autenticado!', {
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
  },[token])

  async function getTema(){
    try {
      await busca("/tema", setTemas, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }

  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
       {temas.length === 0 ? (<div className="spinner"></div>) : (
        temas.map((tema) => (
          
      <Box marginX={20} m={2} >
        <Card variant="outlined" className='corcard'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             Descrição:
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`}  className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary" className='letradeletar'>
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
     )}
    </>
  );
}


export default ListaTema;