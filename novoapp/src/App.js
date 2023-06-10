import logo from "./logo.svg";
import "./App.css";
import Linha from "./componentes/Linha";
import { useState, useEffect } from "react";

function App() {
  const [aluno, setAluno] = useState({ id : 0, name: "", RA: "" });
  const [lista, setLista] = useState([]);
  const [contador, setContador] = useState(0);
  const [alerta, setAlerta] = useState("");
  const [mode, setMode] = useState("create");
  useEffect(() => {
    const listaAux = JSON.parse(localStorage.getItem("lista")) ?? [];
    if (listaAux.length > 0) {
      setLista(listaAux);
    }
  }, []);

  useEffect(() => {
    const aux = lista.find((e) => e.name == aluno.name);
    if (aux) {
      setAlerta(`aluno ${aluno.name} ja existe!`);
    } else {
      setAlerta("");
    }
    //setContador(contador+1);
  }, [lista, aluno]);

  const handleSave = () => {
    console.log(mode)
    if(mode === 'edit'){
      let aux = lista.find((item)=> item.id === aluno.id);
      aux.name  = aluno.name;
      aux.RA  = aluno.RA;
      localStorage.setItem("lista", JSON.stringify(lista));
      setLista(lista)
    }else{
      const idx = lista.length + 1;
      aluno.id = idx;
      lista.push(aluno);
      localStorage.setItem("lista", JSON.stringify(lista));
      setContador(contador + 1);
      setAluno({ name: "", RA: "" });
    }

  };

  const onChangeName = ({ target }) => {
    setAluno({ ...aluno, name: target.value });

  };

  const onChangeRA = ({ target }) => {
    setAluno({ ...aluno, RA: target.value });
  };

  const handleEdit = (aluno)=>{
    console.log(aluno)
    setMode('edit')
    setAluno({...aluno})
  }

  return (
    <>
      <h1>{aluno.name}</h1>
      <h2>{contador}</h2>
      <h2>{alerta}</h2>
      <h3>{aluno.id}</h3>
      <input
        type="text"
        placeholder="name"
        value={aluno.name}
        onChange={onChangeName}
      ></input>
      <input
        type="text"
        placeholder="RA"
        value={aluno.RA}
        onChange={onChangeRA}
      ></input>
      <button onClick={handleSave}>Salvar</button>

      <div>
        {lista.map((item, index) => {
          return (
            <div>
              <div key={index}>
                {item.name} - {item.RA} - <button onClick={(event)=>{ handleEdit(item)}}>Editar</button> <button>Excluir</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
