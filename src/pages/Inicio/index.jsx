import Container from "react-bootstrap/esm/Container";
import Titulo from "../../components/Titulo";
import Calendario from "../../components/Calendario";
import Form from "react-bootstrap/Form";
import Selecao from "../../components/Selecao";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Inicio = () => {
  const [unidade, setUnidade] = useState("");
  const [profissional, setProfissional] = useState("");
  const [turno, setTurno] = useState("");

  const data = new Date();
  const [mes, setMes] = useState(data.getMonth() + 1);

  const [lista, setLista] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setLista([...lista, { mes, unidade, profissional, turno }]);
  };

  return (
    <Container>
      <Titulo titulo={"Consultar Pontos / Escalas"} />

      <Form onSubmit={handleSubmit}>
        <Calendario dia ano setMes={setMes} titulo={"Mês"} />
        <Selecao nome={"Unidade"} change={(value) => setUnidade(value)} />
        <Selecao
          nome={"Tipo de Profissional"}
          change={(value) => setProfissional(value)}
        />
        <Selecao nome={"Turno"} change={(value) => setTurno(value)} />

        <Button type="submit">
          <span className="fs-6 fw-bolder">Enviar</span>
        </Button>
      </Form>

      {lista.map((item) => {
        return (
          <span key={item.mes}>
            {item.mes + item.unidade + item.profissional + item.turno}
          </span>
        );
      })}
    </Container>
  );
};

export default Inicio;
