import { Form } from "react-bootstrap";

const Ano = () => {

    const data = new Date()

    function listar_anos() {
      let arrayanos = []
      let ano_atual = data.getFullYear()
      for (let i = ano_atual; i < ano_atual + 6; i++) {
        arrayanos.push(i)
      }
  
      for (let o = ano_atual; o > ano_atual - 6; o--) {
        arrayanos.push(o)
      }
  
      arrayanos.sort(function compare(a, b) {
        if (a < b) return -1
        if (a > b) return 1
        return 0
      })
  
      var array = arrayanos.filter(function (este, i) {
        return arrayanos.indexOf(este) === i
      })
      return array
    }

  return (
    <Form.Select aria-label="Default select example">
      {listar_anos().map((ano) => {
        return (
          <option
            key={ano}
            value={ano}
            selected={ano === data.getFullYear() ? "selected" : ""}
            label={ano}
          />
        );
      })}
    </Form.Select>
  );
};

export default Ano;
