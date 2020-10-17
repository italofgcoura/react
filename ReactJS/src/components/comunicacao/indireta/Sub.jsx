import React from 'react'

export default (props) => {

    function acao() {
        props.onClicar(Math.random(), "Gerador aleatório");
    }

    return (
        <div>
            <button onClick={acao}>
                Alterar
            </button>
        </div>
    );
};
