import { Button, Card, Container, Form } from "react-bootstrap";
import Calendario from "../../components/Calendario";
import Selecao from "../../components/Selecao";
import Titulo from "../../components/Titulo";


const GDC = () => {
    return (

        <Container>

            <Titulo/> 

            <Card className="mb-4 shadow-sm">
                <Card.Header><span className="fs-6 fw-bolder">Consulta Unidade por Dia e Turno</span></Card.Header>

                <Card.Body>
                    <Form>
                        
                        <Calendario titulo={'Dia'}/>
                        <Selecao nome={'Unidade'}/>
                        <Selecao nome={'Turno'}/>

                        <Button style={{width:'100%'}} type="submit">
                            <span className="fs-6 fw-bolder">Ok</span>
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm">
                <Card.Header><span className="fs-6 fw-bolder">Consulta Unidade por Dia e Turno</span></Card.Header>

                <Card.Body>
                    <Form>
                        
                        <Calendario titulo={'Semana'}/>
                        <Selecao nome={'Unidade'}/>
                        <Selecao nome={'Turno'}/>

                        <Button style={{width:'100%'}} type="submit">
                            <span className="fs-6 fw-bolder">Ok</span>
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm">
                <Card.Header><span className="fs-6 fw-bolder">Consulta Unidade por Dia e Turno</span></Card.Header>

                <Card.Body>
                    <Form>
                        
                        <Calendario titulo={'Mês'} dia ano/>
                        <Selecao nome={'Unidade'}/>
                        <Selecao nome={'Turno'}/>

                        <Button style={{width:'100%'}} type="submit">
                            <span className="fs-6 fw-bolder">Ok</span>
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

            


        </Container>

     );
}
 
export default GDC;