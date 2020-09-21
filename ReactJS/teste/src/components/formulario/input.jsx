import React, { useState } from "react";
import InputData from "./inputData";

export default (props) => {
  const [nome, setNome] = useState("Italo");
  const [cpf, setCPF] = useState(12346578988);
  console.log(nome);
  console.log(cpf);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cpf: props.CPF || "",
  //     nome: props.Nome || "",
  //   };
  //   console.log("cpf" + this.state.cpf);
  //   console.log("nome" + this.state.nome);
  // }

  // updateCPF = (newCPF) => {
  //   this.setState({
  //     cpf: newCPF,
  //   });
  // };

  // updateNome = (newNome) => {
  //   this.setState({
  //     nome: newNome,
  //   });
  // };

  //função para adcionar
  async function postData() {
    const userData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        cpf: cpf,
      }),
    };

    await fetch("http://localhost:3000/clientes", userData)
      .then((Response) => console.table(Response.json()))
      .catch((error) => console.error("Erro inesperado" + error));
  }

  return (
    <div>
      <InputData
        nome={nome}
        cpf={cpf}
        onNome={setNome}
        onCPF={setCPF}
        onSub={postData}
      ></InputData>
    </div>
  );
};
