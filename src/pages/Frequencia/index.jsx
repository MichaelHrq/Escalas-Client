import { Button, Container, Form } from "react-bootstrap";
import Titulo from "../../components/Titulo";
import Data from "./components/Data";
import Selecao from "../../components/Selecao";


const Frequencia = () => {
    return ( 

        <Container>

            <Titulo titulo={'Frequência'} frequencia/>

            <Form>
                <Data/>
                <Selecao nome={'Unidade'}/>
                <Selecao nome={'Turno'}/>
                <Button style={{ width: '100%' }} className='justify-content-center' type="submit">
                    <span className="fs-6 fw-bolder">Ok</span>
                </Button>
            </Form>
            
            
        </Container>

     );
}
 
export default Frequencia;