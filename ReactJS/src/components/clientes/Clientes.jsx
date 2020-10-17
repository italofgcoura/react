// src/components/contacts.js

import React, { useEffect, useState } from "react";
import TituloTeste from '../titulos/titulos'


export default function Clientes() {
  const [clientes, setCliente] = useState([{
    CPF: 123456789,
    Nome: "Italo",
    ID: 1
  }, {
    CPF: 1234567789,
    Nome: "AItalo",
    ID: 2
  }, {
    CPF: 1263456789,
    Nome: "IBtalo",
    ID: 3
  }]);

  const [usuario, setUsers] = useState([])

  

  console.log(usuario)

  useEffect(() => {
    console.log("use efect rodou");
    getData(setUsers);
  }, [clientes, usuario]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((client, index) => (
            <tr key={client.ID}>
              <TituloTeste nome={client.Nome}></TituloTeste>
              <td>{client.CPF}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function deleteData(ID) {
  console.log("delete");
  const userData = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  fetch("http://localhost:3000/clientes/" + ID, userData)
    .then((Response) => console.table("dados" + Response.json()))
    .catch((error) => console.error("Erro inesperado" + error));
}

function getData(setUsers) {
  fetch("http://localhost:3000/users")

    .then((res) => res.json())

    .then((result) => {

      console.log(result)

      setUsers(result);

    })

  // .catch(function (err) {
  //   console.error("Erro: Verificar rota e/ou api", err);
  // });
}
