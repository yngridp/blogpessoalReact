import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
    <div className='fundo2'>
      <TabContext value={value} >
        <AppBar position="static" >
          <Tabs centered indicatorColor="primary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Sou uma fã fervorosa de Star Wars, encontrando inspiração na saga épica que me cativou desde cedo.
Com meus 22 anos, destaco-me como uma desenvolvedora Java Full Stack apaixonada pela arte da programação.
Minha paixão pela tecnologia e pelo universo de Star Wars me impulsiona a buscar constantemente novos desafios e a me aprimorar.
Destinada a deixar uma marca duradoura na indústria, unindo minha devoção a Star Wars com minhas habilidades de desenvolvimento.
Que a Força esteja comigo em minha jornada de sucesso, enquanto inspiro outros com minha dedicação à saga e minha expertise em Java Full Stack.</Typography>
        </TabPanel>
      </TabContext>
      </div>
    </>
  );
}
export default TabPostagem;