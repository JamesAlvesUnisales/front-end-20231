import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js'; 
import Home from './pages/Home.js';
import Professor from './pages/Professor.List.js';
import Desafio from './pages/Desafio.List.js'
import NoPage from './pages/NoPage.js'
function App() {
  const [user, setUser] = useState({})
  const [listaUser, setListaUser] = useState([])
  
  
  useEffect(()=>{
    console.log('chamou o useEffect!')
  },[user, listaUser])


  const onChangeInput = (param) =>{
    const {target} = param;
    // console.log(target.value)
    setUser({...user, name:target.value})
  }

  const onSave = ()=>{
    user.id = listaUser.length+1;
    setListaUser([...listaUser, user]);
    setUser({name:'',id:-1})
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="professor" element={<Professor />} />
          <Route path="desafio" element={<Desafio />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
/*
  return (
    <div className="App">
      <h1>Olá {user.name}!</h1>
      <input type='text' onChange={onChangeInput} value={user.name}></input>
      <Button variant="primary" onClick={onSave}>botao</Button>
      <div>{user.name} esta logado com id {user.id} </div>
      <Button variant="secondary" onClick={()=> console.log(listaUser)}>imprimir lista</Button>
    </div>
  );*/
}

export default App;
