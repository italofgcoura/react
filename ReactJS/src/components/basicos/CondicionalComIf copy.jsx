import React from 'react'
import If from './If'

export default props => {

    return (
        <div>
            <h2>O número é 'if' {props.numero}</h2>
            <If teste={props.numero % 2 == 0}>
                
                    <span>É par</span>
                
            </If>

            <If teste={props.numero % 2 == 1}>
                
                    <span>É impar</span>
                
            </If>
        </div>
    )
}