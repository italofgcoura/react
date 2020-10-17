import React from "react";

export default (props) => {
  return (
    <>
      <form>
        <input
          placeholder="Digite o nome aqui:"
          type="text"
          name={props.nome}
          value={props.nome}
          onChange={(event) => props.onNome(event.target.value)}
        />
        <input
          placeholder="Digite o CPF aqui:"
          type="number"
          name={props.cpf}
          value={props.cpf}
          onChange={(event) => props.onCPF(event.target.value)}
        />
        <input type="submit" onClick={props.onSub}></input>
      </form>
    </>
  );
};
