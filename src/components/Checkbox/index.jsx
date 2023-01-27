import Form from 'react-bootstrap/Form';


const Checkbox = ({ label , change, checkbox }) => {

    const check = () => {
        change(!checkbox)
    }

    return (
        <Form className='mb-4'>
            <Form.Check 
            type={'checkbox'}
            id={label}
            label={<span className="fs-6 fw-bolder">{label}</span>}
            onChange={check}
            />
        </Form>
     );
}
 
export default Checkbox;