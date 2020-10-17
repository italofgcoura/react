import React, { useEffect, useState } from "react";
import TituloTeste from '../titulos/titulos'

const Clientes = () => {
    
    const [usuario, setUsers] = useState([])

    useEffect(() => {
        getData(setUsers);
    }, []);

    const getData =(setUsers) => {
        fetch("http://localhost:3000/users")
        .then((res) => res.json())

        .then((result) => {
        setUsers(result);
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {usuario.map((client, index) => (
                    <tr key={client.ID}>
                        <TituloTeste nome={client.Nome}></TituloTeste>
                        <td>{client.CPF}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default Clientes;
