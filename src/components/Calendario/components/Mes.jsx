import { Form } from 'react-bootstrap'

const Mes = () => {

    const data = new Date()

    const mes = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ]

    return ( 

        <Form.Select
        aria-label="Default select example"
      >
        {mes.map((mes) => {
          return (
            <option
              key={mes}
              value={mes}
              selected={mes === data.getMonth() ? 'selected' : ''}
              Label={mes}
            />
          )
        })}
      </Form.Select>

     );
}
 
export default Mes;