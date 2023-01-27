import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FrequenciaRelatorio = ({titulo}) => {
    return ( 

        <div className='d-flex justify-content-between'>

        <p className="h1">{titulo}</p>

        <div className='ms-3' style={{ heith: '80%' }}>
            <Link to={'diaria'}>
                <Button className='me-2' variant="success">Relatório de Frequencia Diária</Button>
            </Link>
        </div>

        </div>

     );
}
 
export default FrequenciaRelatorio;