function remover(e) {
  console.log(e);
}

function Linha(props) {
  // console.log(objeto);
  const { id, nome } = props;
  return (
    <div id={"row" + id} className="row">
      <div>{id}</div>
      <div>{nome}</div>
      <div>
        <button onClick={remover}>excluir</button>
      </div>
    </div>
  );
}

export default Linha;
