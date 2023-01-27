import Container from "react-bootstrap/esm/Container";
import Titulo from "../../components/Titulo";
import Form from 'react-bootstrap/Form';
import Selecao from '../../components/Selecao';
import { useState } from "react";
import Botao from "../../components/Botao";


const Inicio = () => {

    const [mes, setMes] = useState('')
    const [unidade, setUnidade] = useState('')
    const [profissional, setProfissional] = useState('')
    const [turno, setTurno] = useState('')

    return ( 

            <Container>

                <Titulo titulo={'Consultar Pontos / Escalas'}/>

                <Form>
                    <Selecao nome={'Mês'} change={value => setMes(value)} />
                    <Selecao nome={'Unidade'} change={value => setUnidade(value)} />
                    <Selecao nome={'Tipo de Profissional'} change={value => setProfissional(value)} />
                    <Selecao nome={'Turno'} change={value => setTurno(value)} />
                </Form>

                <p>{mes}{unidade}{profissional}{turno}</p>

                <Botao text={'Mostrar'}/>

            </Container>
     );
}
 
export default Inicio;