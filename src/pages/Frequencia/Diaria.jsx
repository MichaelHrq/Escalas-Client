import { Button, Container, Form } from "react-bootstrap";
import Calendario from "../../components/Calendario";
import Selecao from "../../components/Selecao";
import Titulo from "../../components/Titulo";


const Diaria = () => {
    return (  
        <Container>

            <Titulo titulo={'Relatório de Frequência Diária'} />

            <Form>

                <Selecao nome={'Unidade'} />
                <Selecao nome={'Função'} />
                <Selecao nome={'Turno'} />
                <Calendario titulo={'Data'} />

                <Button style={{width:'100%'}} type="submit">
                    <span className="fs-6 fw-bolder">Consultar</span>
                </Button>

            </Form>

        </Container>
     );
}
 
export default Diaria;