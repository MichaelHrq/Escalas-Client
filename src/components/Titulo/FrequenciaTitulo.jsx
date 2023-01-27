import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FrequenciaTitulo = ({titulo}) => {
    return ( 

        <div className='d-flex justify-content-between'>

            <p className="h1">{titulo}</p>

            <div className='ms-3' style={{ heith: '80%' }}>
                <Link to={'relatorio'}>
                    <Button className='me-2' variant="primary">Relatório</Button>
                </Link>
                <Button variant="success">Mapa</Button>
            </div>

        </div>

     )
}
 
export default FrequenciaTitulo;