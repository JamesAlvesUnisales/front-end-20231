import logo from "./logo.svg";
import "./App.css";
import Linha from "./componentes/Linha";
import { useState } from "react";

const res = await fetch("https://jsonplaceholder.typicode.com/users");
const lista = await res.json();

function App() {
  const [pessoa, setPessoa] = useState({
    name: "James Alves",
    username: "james.alves",
  });

  const [lista, setLista] = useState([])

  localStorage.setItem('lista', JSON.stringify(lista))
  const [postBlog, setPostBlog] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const handleButton = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postBlog),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const payload = await response.json()
    console.log(payload)
    alert(`Post ${payload.id} foi criado com sucesso!`)
    lista.push(postBlog)
    localStorage.setItem('lista', JSON.stringify(lista))
  };
  const changeInputUsername = ({ target }) => {
    setPessoa({ ...pessoa, username: target.value });
  };

  const changeInputName = ({ target }) => {
    setPessoa({ ...pessoa, name: target.value });
  };

  const changeInputUserId = ({ target }) => {
    setPostBlog({ ...postBlog, userId: target.value });
  };
  const changeInputTitle = ({ target }) => {
    setPostBlog({ ...postBlog, title: target.value });
  };
  const changeInputBody = ({ target }) => {
    setPostBlog({ ...postBlog, body: target.value });
  };
  return (
    <>
      <div>
        <input placeholder="user id" value={postBlog.userId} onChange={changeInputUserId}></input>
        <input  placeholder="title"  value={postBlog.title} onChange={changeInputTitle}></input>
        <textarea  placeholder="body" value={postBlog.body} onChange={changeInputBody}></textarea>
        <button onClick={handleButton}>Salvar</button>
      </div>
      <div>
        <div>Ola {pessoa.name}!</div>

        <input
          type="text"
          id="username"
          placeholder="usuario"
          value={pessoa.username}
          onChange={changeInputUsername}
        />

        <input
          type="text"
          placeholder="nome"
          value={pessoa.name}
          onChange={changeInputName}
        />

        <button onClick={() => handleButton()}>Salvar</button>
        <div>Adeus {pessoa.username}!</div>
      </div>
      <div className="grade">
        {lista.map((userInfo) => {
          return (
            <Linha nome={userInfo.name} id={userInfo.id} objeto={userInfo} />
          );
        })}
      </div>
    </>
  );
}

export default App;
