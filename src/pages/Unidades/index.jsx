import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Titulo from "../../components/Titulo";

const Unidade = ({unidade}) => {

  return (

    <Container>
      <Titulo titulo={"Unidades"} botao={true} path={"adicionar"} />

      <Table responsive="md">
        <thead>
          <tr>
            <th>Nome</th>
            <th>QT Platões Enfermeiros - Mês</th>
            <th>QT Platões Enfermeiros - Diurno</th>
            <th>QT Platões Enfermeiros - Noturno</th>
            <th>QT Platões Técnicos - Mês</th>
            <th>QT Platões Técnicos - Diurno</th>
            <th>QT Platões Técnicos - Noturno</th>
            <th></th> {/* botao apagar */}
          </tr>
        </thead>
        <tbody>
          {unidade.map((unid) => {
            return (
              <tr key={unid.nome}>
                <td style={{ color: "#337ab7" }}>
                  <strong>{unid.nome}</strong>
                </td>
                <td className="text-center">{unid.enfmes}</td>
                <td className="text-center">{unid.enfdia}</td>
                <td className="text-center">{unid.enfnoite}</td>
                <td className="text-center">{unid.tecmes}</td>
                <td className="text-center">{unid.tecdia}</td>
                <td className="text-center">{unid.tecnoite}</td>
                <td>
                  <Button variant="danger">Apagar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );

};

export default Unidade;
