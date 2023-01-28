import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Titulo from "../../components/Titulo";


const Feriados = () => {

    return (
        <Container>
            <Titulo titulo="Feriado" botao={true} path="adicionar" />
            <Table responsive="sm" >
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Repete Anualmente</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Aniversario de manaus</td>
                        <td>09/09/9090</td>
                        <td>Municipal</td>
                        <td>sim</td>
                        <td><Button variant="danger">Apagar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Feriados

