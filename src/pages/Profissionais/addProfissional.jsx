import { Container, Form } from "react-bootstrap";
import Titulo from "../../components/Titulo";
import InputTexto from "../../components/InputTexto";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import Selecao from "../../components/Selecao";


const AddProfissional = () => {

    const [nome,setNome] = useState()
    const [fone,setFone] = useState()
    const [checkbox, setCheckbox] = useState(false)
    const [matricula,setMatricula] = useState()
    const [conselho,setConselho] = useState()
    const [categoria,setCategoria] = useState()
    const [valeTransporte,setValeTransporte] = useState()

    return ( 
        <Container>

            <Titulo titulo={'Adicionar Profissional'} />

            <Form>
                <InputTexto change={setNome} descricao={'Nome'} type={'text'}/>
                <InputTexto change={setFone} descricao={'Fone'} type={'text'}/>
                <Checkbox change={setCheckbox} checkbox={checkbox} label={'Diarista?'}/>
                <InputTexto change={setMatricula} descricao={'Matrícula'} type={'text'}/>
                <InputTexto change={setConselho} descricao={'Conselho'} type={'number'}/>
                <Selecao change={setCategoria} nome={'Categoria'}/>
                <Selecao change={setValeTransporte} nome={'Vale Transporte'}/>
            </Form>

            <p>{nome}{fone}{matricula}{conselho}{categoria}{valeTransporte}</p>
        </Container>
     );
}
 
export default AddProfissional;