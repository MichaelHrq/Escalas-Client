import React from "react";
import { Form } from "react-bootstrap";

const NomeFeriados = ({setFeriado}) => {

    const handleOnChange = (e) => {
        setFeriado(e.target.value)
    }

    return (
        <div className="mb-4">
            <Form.Group md="4">
                <Form.Label><span className="fs-6 fw-bolder">Nome</span></Form.Label>
                <Form.Control
                    onChange={handleOnChange}
                    required
                    type="text" />
            </Form.Group>
        </div>
    )
}


export default NomeFeriados