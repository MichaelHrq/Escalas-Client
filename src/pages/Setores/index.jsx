import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Titulo from "../../components/Titulo";

const Setores = () => {

    return (
        <Container>          
            <Titulo titulo={"Setores"} />
            <Table responsive='lg'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Insalubridade</th>
                        <th>Local</th>
                        <th></th> {/* botao apagar */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>wille</td>
                        <td>20</td>
                        <td>manaus</td>
                        <td><Button variant="danger">Apagar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
}


export default Setores
