import { Form } from "react-bootstrap";

const Mes = ({ setMes }) => {
  const data = new Date()

  const mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const handleOnChange = (item) => {
    setMes(item.target.value);
  }

  return (
    <Form.Select 
      aria-label="Default select example"
      onChange={item => handleOnChange(item)}
      >
      {mes.map((mes) => {
        return (
          <option
            key={mes}
            value={mes}
            selected={mes === data.getMonth() ? "selected" : ""}
            label={mes}
          />
        )
      })}
    </Form.Select>
  )
}

export default Mes;
