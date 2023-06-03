import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Actions';


function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
        postagens: []
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Usuário não autenticado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        try {
            await buscaId(`/tema/${id}`, setTema, {
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

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
    
            if (id !== undefined) {
                try {
                    await put(`/tema`, tema, setTema, {
                        headers: {
                            'Authorization': token
                        }
                    })
                toast.success('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
                } catch (error: any) {
                    if (error.response?.status === 403) {
                        dispatch(addToken(''))
                    } else {
                        toast.error("Erro ao Atualizar o Tema", {
                            position: 'top-right',
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            theme: 'colored',
                            progress: undefined,
                        });
                    }
                }
            } else {
                try {
                    await post(`/tema`, tema, setTema, {
                        headers: {
                            'Authorization': token
                        }
                    })
                    toast.success('Tema cadastrado com sucesso!', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: 'colored',
                        progress: undefined,
                    });
                } catch (error: any) {
                    if (error.response?.status === 403) {
                        dispatch(addToken(''))
                    } else {
                        toast.error("Erro ao Cadastrar o Tema", {
                            position: 'top-right',
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            theme: 'colored',
                            progress: undefined,
                        });
                    }
                }
            }
            back()
    
        }
    
        function back() {
            navigate('/tema')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                {tema.id ? 'Atualizar' : 'Cadastrar'}
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
