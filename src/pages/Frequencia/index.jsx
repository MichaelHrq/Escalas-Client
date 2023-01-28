import { Button, Container, Form } from "react-bootstrap";
import Titulo from "../../components/Titulo";
import Selecao from "../../components/Selecao";
import { useState } from "react";
import Calendario from "../../components/Calendario";


const Frequencia = () => {

    const [unidade,setUnidade] = useState()
    const [turno,setTurno] = useState()
    const [dia,setDia] = useState()
    const [mes,setMes] = useState()
    const [ano,setAno] = useState()

    return ( 

        <Container>

            <Titulo titulo={'Frequência'} frequencia/>

            <Form>
                <Calendario titulo='Data' setDia={setDia} setMes={setMes} setAno={setAno} />
                <Selecao nome={'Unidade'} change={setUnidade} />
                <Selecao nome={'Turno'} change={setTurno} />
                <Button style={{ width: '100%' }} className='justify-content-center' type="submit">
                    <span className="fs-6 fw-bolder">Ok</span>
                </Button>
            </Form>

            <>{unidade}</>
            <>{turno}</>
            <>{dia}</>
            <>{mes}</>
            <>{ano}</>
            
        </Container>

     );
}
 
export default Frequencia;