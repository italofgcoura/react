import React, { Component } from "react";

import "./app.css";
import First from "./components/basicos/primeiro";
import Parametro from "./components/basicos/componenteComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/Layout/Card";
import Repet from "./components/basicos/Repetition";
import Condicional from "../src/components/basicos/Condicional";
import CondicionalIf from "../src/components/basicos/CondicionalComIf copy";
import Pai from "../src/components/comunicacao/direta/Pai";
import Super from "../src/components/comunicacao/indireta/Super";
import InputForm from "../src/components/formulario/input";
import Contador from "../src/components/contador/Contador";
import Mega from "../src/components/Mega/Mega";
import Clientes from "../src/components/clientes/Clientes";

export default (props) => (
  <div className="app">
    <h1>Fundamentos React</h1>

    <div className="cards">
      <Card titulo="#011 - Mega" color="#998574">
        <Clientes></Clientes>
      </Card>

      <Card titulo="#011 - Mega" color="#888999">
        <Mega qtdNumeros={6}></Mega>
      </Card>

      <Card titulo="#010 - Contador" color="#589874">
        <Contador passo={1} valor={5}></Contador>
      </Card>

      <Card titulo="#09 - Input" color="#123456">
        <InputForm></InputForm>
      </Card>

      <Card titulo="#08 - Comunicação indireta" color="#333333">
        <Super></Super>
      </Card>

      <Card titulo="#07 - Comunicação direta" color="#D50DD9">
        <Pai sobrenome="Freitas" idade="44"></Pai>
      </Card>

      <Card titulo="#06 - Condicional com IF" color="#F25116">
        <CondicionalIf numero={1}></CondicionalIf>
      </Card>

      <Card titulo="#05 - Condicional" color="#025951">
        <Condicional numero={159}></Condicional>
      </Card>

      <Card titulo="#04 - Lista Loja" color="#048ABF">
        <Repet></Repet>
      </Card>

      <Card titulo="#03 - Com filhos" color="white">
        <ComFilhos>
          <ul>
            <li>Joao</li>
            <li>Ana</li>
            <li>Maria</li>
            <li>Fabrício</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com parâmetro" color="#933CCC">
        <Parametro titulo="Título do parâmetro" subtitulo="sub"></Parametro>
      </Card>

      <Card titulo="#01 - Primeiro componente" color="pink">
        <Parametro titulo="Título do parâmetro"></Parametro>
      </Card>
      
    </div>
  </div>
);