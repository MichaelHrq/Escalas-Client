import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Ano from "./components/Ano";
import Dia from "./components/Dia";
import Mes from "./components/Mes";

const Calendario = ({ titulo, dia, mes, ano }) => {

  return (

    <div className="mb-4">

      <Form.Label><span className="fs-6 fw-bolder">{titulo}</span></Form.Label>

      <Row className="m-0">

        { !dia && <Col className="p-0 me-2" xs="auto"> <Dia/> </Col> }

        { !mes && <Col className="p-0 me-2" xs="auto"> <Mes/> </Col> }

        { !ano && <Col className="p-0 me-2" xs="auto"> <Ano/> </Col> }

      </Row>

    </div>

  )
}

export default Calendario;
