import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Botoes = () => {
    return ( 

        <div className="d-flex flex-column">
            <Link to={'licenca'}>
                <Button className='mb-1' variant="warning" style={{ color:'white' }}>Licenças</Button>
            </Link>
            <Button variant="danger">Apagar</Button>
        </div>

     );
}
 
export default Botoes;