import { Container, Form } from "react-bootstrap";
import Titulo from "../../components/Titulo";
import Selecao from "../../components/Selecao";
import Botoes from "./components/Botoes";
import Calendario from "../../components/Calendario";


const Relatorio = () => {
    return ( 

        <Container>

            <Titulo titulo={'Relatório de Frequência'} relatorio />

            <Form>
                <Selecao nome={'Tipo de Relatorio'}/>
                <Selecao nome={'Unidade'}/>
                <Selecao nome={'Função'}/>
                <Selecao nome={'Turno'}/>
                <Calendario titulo={'Mês / Ano'} dia />
                <Botoes/>
            </Form>

        </Container>

     );
}
 
export default Relatorio;