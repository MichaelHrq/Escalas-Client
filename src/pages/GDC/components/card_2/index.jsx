import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Calendario from "../../../../components/Calendario";
import Selecao from "../../../../components/Selecao";

const Card2 = () => {

  const [unidade, setUnidade] = useState()
  const [turno, setTurno] = useState()
  const [semana,setSemana] = useState()

  const lista = {unidade,turno,semana}

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log(lista)
  }

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header>
        <span className="fs-6 fw-bolder">Consulta Unidade por Semana e Turno</span>
      </Card.Header>

      <Card.Body>
        <Form>
          <Calendario titulo={"Semana"} />
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

export default Card2;
