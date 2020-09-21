// src/components/contacts.js

import React, { useEffect, useState } from "react";
import TituloTeste from '../titulos/titulos'

export default function Clientes() {
  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    getData(setCliente);
    console.log("use efect rodou");
  }, []);

  // this.state = {
  //   clientes: [],
  // };

  // useEffect(() => {
  //   getData(setCliente);
  // }, [clientes]);

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
          {clientes.map((client) => (
            <tr key={client.funcionarioID}>
              <TituloTeste nome={client.funcionarioNome}></TituloTeste>
              <td>{client.funcionarioPassword}</td>
              <td>{client.funcionarioID}</td>
              
              <td>
                <button
                  onClick={() => {
                    deleteData(client.funcionarioID);
                  }}
                >
                  X
                </button>
              </td>
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

function getData(setClient) {
  fetch("http://localhost:3000/clientes")
    .then((res) => res.json())

    .then((result) => {
      console.log(result[0]);
      setClient(result);
      // console.log(this.result);
    })
    .catch(function (err) {
      console.error("Erro: Verificar rota e/ou api", err);
    });
}
