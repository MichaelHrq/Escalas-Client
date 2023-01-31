import { Container, Form } from "react-bootstrap";
import Titulo from "../../components/Titulo";
import Selecao from "../../components/Selecao";
import Botoes from "./components/Botoes";
import Calendario from "../../components/Calendario";
import { useState } from "react";


const Relatorio = () => {

    const [relatorio,setRelatorio] = useState()
    const [turno,setTurno] = useState()
    const [unidade,setUnidade] = useState()
    const [funcao,setFuncao] = useState()

    const data = new Date()
    const [mes, setMes] = useState(data.getMonth()+1)
    const [ano, setAno] = useState(data.getFullYear())

    return ( 

        <Container>

            <Titulo titulo={'Relatório de Frequência'} relatorio />

            <Form>
                <Selecao change={setRelatorio} nome={'Tipo de Relatorio'}/>
                <Selecao change={setUnidade} nome={'Unidade'}/>
                <Selecao change={setFuncao} nome={'Função'}/>
                <Selecao change={setTurno} nome={'Turno'}/>
                <Calendario titulo={'Mês / Ano'} dia setMes={setMes} setAno={setAno} />
                <Botoes/>
            </Form>

            <>{relatorio}</>
            <>{turno}</>
            <>{unidade}</>
            <>{funcao}</>
            <>{mes}</>
            <>{ano}</>

        </Container>

     );
}
 
export default Relatorio;