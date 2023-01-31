import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Calendario from "../../../../components/Calendario";
import Selecao from "../../../../components/Selecao";

const Card1 = () => {
  const [unidade, setUnidade] = useState();
  const [turno, setTurno] = useState();

  const data = new Date();
  const [dia, setDia] = useState(data.getUTCDate());
  const [mes, setMes] = useState(data.getMonth() + 1);
  const [ano, setAno] = useState(data.getFullYear());

  const lista = { unidade, turno, dia, mes, ano };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(lista);
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header>
        <span className="fs-6 fw-bolder">Consulta Unidade por Dia e Turno</span>
      </Card.Header>

      <Card.Body>
        <Form>
          <Calendario
            titulo="Dia"
            setDia={setDia}
            setMes={setMes}
            setAno={setAno}
          />
          <Selecao nome={"Unidade"} change={setUnidade} />
          <Selecao nome={"Turno"} change={setTurno} />

          <Button
            onClick={handleSubmit}
            style={{ width: "100%" }}
            type="submit"
          >
            <span className="fs-6 fw-bolder">Ok</span>
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Card1;
