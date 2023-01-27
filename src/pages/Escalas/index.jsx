import Container from "react-bootstrap/esm/Container";
import Titulo from "../../components/Titulo";
import Form from 'react-bootstrap/Form';
import Selecao from '../../components/Selecao';
import { useState } from "react";
import Botao from "../../components/Botao";


const Escalas = () => {

    const [mes, setMes] = useState('')
    const [unidade, setUnidade] = useState('')
    const [setor, setSetor] = useState('')
    const [profissional, setProfissional] = useState('')
    const [turno, setTurno] = useState('')

    return ( 

            <Container>

                <Titulo titulo={'Montar Escala Mensal Por Unidade'}/>

                <Form>
                    <Selecao nome={'Mês'} selected={value => setMes(value)} />
                    <Selecao nome={'Unidade'} selected={value => setUnidade(value)} />
                    <Selecao nome={'Setor'} selected={value => setSetor(value)} />
                    <Selecao nome={'Tipo de Profissional'} selected={value => setProfissional(value)} />
                    <Selecao nome={'Turno'} selected={value => setTurno(value)} />
                </Form>

                <p>{mes}{unidade}{setor}{profissional}{turno}</p>

                <Botao text={'Mostrar'}/>

            </Container>
     );
}
 
export default Escalas;