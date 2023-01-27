import Button from 'react-bootstrap/Button';


const Botao = ({text}) => {
    return ( 

        <Button className='btn btn-primary justify-content-center fs-6'>
            {text}
        </Button>

     );
}
 
export default Botao;