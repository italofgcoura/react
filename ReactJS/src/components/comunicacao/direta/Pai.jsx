import React from 'react'
import Filho from './Filho'


export default props =>
    <div>
    <Filho {...props}>José</Filho>
    <Filho sobrenome={props.sobrenome}>Antônio</Filho>
    <Filho sobrenome="Silva">Rafael</Filho>
    </div>