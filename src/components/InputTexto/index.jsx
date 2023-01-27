import Form from 'react-bootstrap/Form';

const InputTexto = ({descricao, type, change}) => {

    const handleOnChange = (e) => {
        change(e.target.value)
    }

    return ( 

            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className='fw-bolder fs-6'>{descricao}</Form.Label>
                <Form.Control onChange={handleOnChange} type={type}/>
            </Form.Group>

     );
}
 
export default InputTexto;