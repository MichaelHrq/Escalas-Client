import React from "react";
import { Form } from "react-bootstrap";

const NomeFeriados = () => {
    return (
        <div className="mb-4">
            <Form.Group md="4">
                <Form.Label><span className="fs-6 fw-bolder">Nome</span></Form.Label>
                <Form.Control
                    required
                    type="text" />
            </Form.Group>
        </div>
    )
}


export default NomeFeriados