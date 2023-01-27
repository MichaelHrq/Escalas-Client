import React from "react";
import { Form } from "react-bootstrap";

const TipoFeriados = () => {


    const tipoFeriado = [
        'municipal', 'estadual', 'federal'
    ]


    return (
        <div className="mb-4">
            <Form.Label><span className="fs-6 fw-bolder">Tipo de Feriado</span></Form.Label >
            <Form.Select required aria-label="Default select example" >

                <option disabled={true} selected></option>
                {tipoFeriado.map(opcao => {
                    return (
                        
                        <option label={opcao}></option>
                    )
                })}
            </Form.Select>
        </div>
    )
}


export default TipoFeriados