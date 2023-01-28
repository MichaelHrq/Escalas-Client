import { Container } from "react-bootstrap";
import Titulo from "../../components/Titulo";
import Card1 from "./components/card_1";
import Card2 from "./components/card_2";
import Card3 from "./components/card_3";


const GDC = () => {
    return (

        <Container>

            <Titulo titulo={'Relatórios Gestão do Cuidado'} /> 

            <Card1/>
            <Card2/>
            <Card3/>

        </Container>

     );
}
 
export default GDC;