import React, { Component, useState } from "react";
import Mostrador from "../contador/Mostrador";
import Passos from "../contador/Passos";
import Botoes from "../contador/Botoes";

export default class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //este valor está sendo passado externamente
      passo: props.passo || 5,
      valor: props.valor,
    };
  }

  incremento = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  decremento = () => {
    if (this.state.valor > 0 && this.state.valor - this.state.passo >= 0) {
      this.setState({
        valor: this.state.valor - this.state.passo,
      });
    }
  };

  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>

        <Passos
          passo={this.state.passo}
          onPassoChange={this.mudarPasso}
        ></Passos>

        <Mostrador valor={this.state.valor}></Mostrador>

        <Botoes
          onIncremento={this.incremento}
          onDecremento={this.decremento}
        ></Botoes>
      </div>
    );
  }
}
