import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Calendario from "../../../../components/Calendario";
import Selecao from "../../../../components/Selecao";

const Card3 = () => {

  const [unidade, setUnidade] = useState();
  const [turno, setTurno] = useState();

  const data = new Date()
  const [mes, setMes] = useState(data.getMonth()+1)


  const lista = {unidade,turno,mes}

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log(lista)
  }

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header>
        <span className="fs-6 fw-bolder">Consulta Unidade por Mês 1º e Turno</span>
      </Card.Header>

      <Card.Body>
        <Form>
          <Calendario titulo={"Mês"} setMes={setMes} dia ano />
          <Selecao nome={"Unidade"} change={setUnidade} />
          <Selecao nome={"Turno"} change={setTurno} />

          <Button onClick={handleSubmit} style={{width:"100%"}} type="submit">
            <span className="fs-6 fw-bolder">Ok</span>
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Card3;
