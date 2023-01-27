import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Titulo from "../../components/Titulo";


const Usuarios = () => {


    return (

        <Container>
            <Titulo titulo={"Usuarios"} />
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Login</th>
                        <th>Tipo</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>usuario</td>
                        <td>role</td>
                        <td><Button variant="danger">Apagar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Usuarios 