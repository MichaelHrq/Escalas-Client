import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Botoes = () => {
    return ( 

        <>
            <Link to={'licenca'}>
                <Button className='me-1' variant="primary" style={{ color:'white' }}>
                    <span className="fs-6 fw-bolder">Consultar</span>
                </Button>
            </Link>
            <Button style={{ color:'white' }} variant="warning">
                <span className="fs-6 fw-bolder">Verificar Dias</span>
            </Button>
        </>

     );
}
 
export default Botoes;