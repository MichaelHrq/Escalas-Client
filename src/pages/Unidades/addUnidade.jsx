import { Container } from "react-bootstrap";
import InputTexto from "../../components/InputTexto";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Titulo from "../../components/Titulo";
import { useState } from "react";

const UnidAdicionar = () => {

    const [nome,setNome] = useState()
    const [enfmes,setEnfmes] = useState()
    const [enfdia,setEnfdia] = useState()
    const [enfnoite,setEnfnoite] = useState()
    const [tecmes,setTecmes] = useState()
    const [tecdia,setTecdia] = useState()
    const [tecnoite,setTecnoite] = useState()

    return ( 
        <Container>

            <Titulo titulo={'Adicionar Unidade'} />

            <Form>
        
                <InputTexto change={value => setNome(value)} descricao={'Nome'} type={'text'}/>
                <InputTexto change={value => setEnfmes(value)} descricao={'Qt Plantões Enfermeiros / Mês'} type={'number'}/>
                <InputTexto change={value => setEnfdia(value)} descricao={'Qt Plantões Enfermeiros - Diurno'} type={'number'}/>
                <InputTexto change={value => setEnfnoite(value)} descricao={'Qt Plantões Enfermeiros - Noturno / Dia'} type={'number'}/>
                <InputTexto change={value => setTecmes(value)} descricao={'Qt Plantões Técnicos / Mês'} type={'number'}/>
                <InputTexto change={value => setTecdia(value)} descricao={'Qt Plantões Técnicos - Diurno / Dia'} type={'number'}/>
                <InputTexto change={value => setTecnoite(value)} descricao={'Qt Plantões Técnicos - Noturno / Dia'} type={'number'}/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>
     );
}
// Adicionar Unidade
 
export default UnidAdicionar;