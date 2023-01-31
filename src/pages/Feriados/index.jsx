import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Titulo from "../../components/Titulo";


const Feriados = ({feriado}) => {

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
                    {feriado.map( feriado => { return(
                        <tr key={feriado.nome}>
                            <td>{feriado.nome}</td>
                            <td>{feriado.data}</td>
                            <td>{feriado.tipoFeriado}</td>
                            <td>{feriado.repeteAno === true ? 'Sim' : 'Não'}</td>
                            <td><Button variant="danger">Apagar</Button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Feriados

