import React from 'react'


export default props => {

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {props.numero % 2 == 0 ?
                <span>É par</span>
                :
                <span>É impar</span>
            }
        </div>
    )
}