import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Calendario from "../../components/Calendario";
import Checkbox from "../../components/Checkbox";
import Titulo from "../../components/Titulo";
import NomeFeriados from "./components/NomeFeriado";
import TipoFeriados from "./components/TiposFeriados";


const AddFeriado = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return ( 

        <Container>

            <Titulo titulo={'Adicionar Feriado'} />

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <NomeFeriados />
                <Calendario titulo='Data' />
                <TipoFeriados />
                <Checkbox label={'Repetir Anualmente'} />
                
                <Button style={{width:'100%'}} type="submit">
                    <span className="fs-6 fw-bolder">Enviar</span>
                </Button>
            </Form>

        </Container>

     );
}
 
export default AddFeriado;