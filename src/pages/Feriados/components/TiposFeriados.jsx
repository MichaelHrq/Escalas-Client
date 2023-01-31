import React from "react";
import { Form } from "react-bootstrap";

const TipoFeriados = ({setTipoFeriado}) => {

    const handleChange = (item) => {
        setTipoFeriado(item.target.value)
    }

    const tipoFeriado = [
        'municipal', 'estadual', 'federal'
    ]


    return (
        <div className="mb-4">
            <Form.Label><span className="fs-6 fw-bolder">Tipo de Feriado</span></Form.Label >

            <Form.Select required aria-label="Default select example" onChange={item => handleChange(item)}>

                <option disabled={true} selected></option>
                {tipoFeriado.map(opcao => {
                    return (
                        
                        <option value={opcao} label={opcao}></option>
                    )
                })}

            </Form.Select>
        </div>
    )
}


export default TipoFeriados