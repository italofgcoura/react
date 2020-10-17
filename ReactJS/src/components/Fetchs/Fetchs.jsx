import { Component } from "react";

export default class Fetch extends Component {
    constructor(props) {
      super(props);
    }

  state = {
    clientesReq: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/clientes")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ clientesReq: result });
        console.log("clientes", this.clientesReq);
        return this.clientesReq
      })
      .catch(function (err) {
        console.error("Erro: Verificar rota e/ou api", err);
      });
  }
}
