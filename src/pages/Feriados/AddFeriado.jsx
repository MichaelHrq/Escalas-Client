import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Calendario from "../../components/Calendario";
import Checkbox from "../../components/Checkbox";
import Titulo from "../../components/Titulo";
import NomeFeriados from "./components/NomeFeriado";
import TipoFeriados from "./components/TiposFeriados";

const AddFeriado = ({ setFeriado, feriado }) => {
  const [nome, setNome] = useState();
  const [tipoFeriado, setTipoFeriado] = useState();
  const [repeteAno, setRepeteAno] = useState(false);

  const data = new Date();
  const [dia, setDia] = useState(data.getUTCDate());
  const [mes, setMes] = useState(data.getMonth() + 1);
  const [ano, setAno] = useState(data.getFullYear());

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const data = "".concat(dia, "/", mes, "/", ano);
    const submit = { nome, tipoFeriado, data, repeteAno };
    console.log(submit);
    setFeriado([...feriado, submit]);
    navigate("/feriados");
  };

  return (
    <Container>
      <Titulo titulo={"Adicionar Feriado"} />

      <Form onSubmit={handleSubmit}>
        <NomeFeriados setNome={setNome} />
        <Calendario
          titulo="Data"
          setDia={setDia}
          setMes={setMes}
          setAno={setAno}
        />
        <TipoFeriados setTipoFeriado={setTipoFeriado} />
        <Checkbox
          label={"Repetir Anualmente"}
          change={setRepeteAno}
          checkbox={repeteAno}
        />

        <Button style={{ width: "100%" }} type="submit">
          <span className="fs-6 fw-bolder">Enviar</span>
        </Button>
      </Form>
    </Container>
  );
};

export default AddFeriado;
