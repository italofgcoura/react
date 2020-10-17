import React, { useState } from 'react'
import Sub from './Sub'

export default props => {

    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState("Início");



    function quandoClicar(valorRandom, texto) {
        setNum(valorRandom)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};
