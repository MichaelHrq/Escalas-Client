import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Calendario from "../../components/Calendario";
import Selecao from "../../components/Selecao";
import Titulo from "../../components/Titulo";


const Diaria = () => {

    const [turno,setTurno] = useState()
    const [unidade,setUnidade] = useState()
    const [funcao,setFuncao] = useState()

    const data = new Date()
    const [dia, setDia] = useState(data.getUTCDate())
    const [mes, setMes] = useState(data.getMonth()+1)
    const [ano, setAno] = useState(data.getFullYear())

    return (  
        <Container>

            <Titulo titulo={'Relatório de Frequência Diária'} />

            <Form>

                <Selecao change={setUnidade} nome={'Unidade'}/>
                <Selecao change={setFuncao} nome={'Função'}/>
                <Selecao change={setTurno} nome={'Turno'}/>
                <Calendario titulo='Data' setDia={setDia} setMes={setMes} setAno={setAno} />

                <Button style={{width:'100%'}} type="submit">
                    <span className="fs-6 fw-bolder">Consultar</span>
                </Button>

            </Form>

        </Container>
     );
}
 
export default Diaria;