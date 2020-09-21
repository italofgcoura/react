import React from 'react'
import './Card.css'


export default props =>
    <div className="card" style={{ borderColor: props.color || "#333" }}>
        <div className="conteudo">
            {props.children}
        </div>
        <div className="footer" style={{ backgroundColor: props.color}}>
            {props.titulo}
        </div>
    </div>