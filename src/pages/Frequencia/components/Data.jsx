import { Col, Form, Row } from "react-bootstrap";

const Data = () => {

    const data = new Date();

    const listar_anos = () => {
      const arrayanos = [];
      const ano_atual = data.getFullYear();
      for (let i = ano_atual; i < ano_atual + 6; i++) {
        arrayanos.push(i);
      }
  
      for (let o = ano_atual; o > ano_atual - 6; o--) {
        arrayanos.push(o);
      }
  
      arrayanos.sort(function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
  
      var array = arrayanos.filter(function (este, i) {
        return arrayanos.indexOf(este) === i;
      });
      return array;
    }

    const dia = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ];
      const mes = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];

    return ( 

        <div className="mb-4">

            <span className="fs-6 fw-bolder">Data</span>

            <Row style={{ margin:"0"}}>

                <Form.Select
                    as={Col}
                    style={{ width: "6em" }}
                    size="sm"
                    aria-label="Default select example"
                >
                    {dia.map((dia) => {
                    return (
                        <option
                        key={dia}
                        value={dia}
                        selected={dia === data.getUTCDate() ? "selected" : ""}
                        label={dia}
                        />
                    );
                    })}
                </Form.Select>

                <Form.Select
                    as={Col}
                    style={{ width: "10em" }}
                    size="sm"
                    aria-label="Default select example"
                >
                    {mes.map((mes) => {
                    return (
                        <option
                        key={mes}
                        value={mes}
                        selected={mes === data.getMonth() ? "selected" : ""}
                        Label={mes}
                        />
                    );
                    })}
                </Form.Select>

                <Form.Select
                    as={Col}
                    style={{ width: "8em" }}
                    size="sm"
                    aria-label="Default select example"
                >
                    {listar_anos().map((lista_anos) => {
                    return (
                        <option
                        key={lista_anos}
                        value={lista_anos}
                        selected={lista_anos === data.getFullYear() ? "selected" : ""}
                        label={lista_anos}
                        />
                    );
                    })}
                </Form.Select>
            </Row>
        </div>
     );
}
 
export default Data;