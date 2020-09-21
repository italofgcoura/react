import React from 'react'
import data from '../../data/products'

export default (props) => {

    function getData() {
        return data.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} - R$ {prod.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Dados Loja</h2>
            <ul>
                {getData()}
            </ul>
        </div>
    )
}