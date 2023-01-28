import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Calendario from "../../components/Calendario";
import Selecao from "../../components/Selecao";
import Titulo from "../../components/Titulo";


const Diaria = () => {

    const [turno,setTurno] = useState()
    const [unidade,setUnidade] = useState()
    const [funcao,setFuncao] = useState()
    const [dia,setDia] = useState()
    const [mes,setMes] = useState()
    const [ano,setAno] = useState()

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