import { Form } from 'react-bootstrap'

const Dia = () => {

    const data = new Date()

    const dias = Array.from({length:31}, (_,i) => i + 1);

    return (

    <Form.Select aria-label="Default select example">

        {dias.map((dia) => {
          return (
            <option
              key={dia}
              value={dia}
              selected={dia === data.getUTCDate() ? 'selected' : ''}
              label={dia}
            />
          )
        })}

    </Form.Select>

     );
}
 
export default Dia;