import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Titulo from '../../components/Titulo';

const Unidade = () => 
{

    const tab = [
        {
            nome : 'Captacao de orgao e transplante',
            em: '0',
            ed: '0',
            en: '0',
            tm: '0',
            td: '0',
            tn: '0',
        },
        {
            nome : 'hospital da crianca',
            em: '0',
            ed: '0',
            en: '0',
            tm: '0',
            td: '0',
            tn: '0',
        },
        {
            nome : 'Hospital e pronto socorro',
            em: '0',
            ed: '0',
            en: '0',
            tm: '0',
            td: '0',
            tn: '0',
        },
    ]

  return (
    <Container>

        <Titulo titulo={'Unidades'} botao={true} path={'adicionar'}/>

        <Table responsive="md" >
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

                {tab.map( unid => {
                    return(
                        <tr key={unid.nome}>
                            <td style={{ color:'#337ab7' }}><strong>{unid.nome}</strong></td>
                            <td className='text-center' >{unid.em}</td>
                            <td className='text-center' >{unid.ed}</td>
                            <td className='text-center' >{unid.en}</td>
                            <td className='text-center' >{unid.tm}</td>
                            <td className='text-center' >{unid.td}</td>
                            <td className='text-center' >{unid.tn}</td>
                            <td><Button variant="danger">Apagar</Button></td>
                        </tr>
                    )
                })}
            </tbody>

        </Table>
    </Container>
  );
}

export default Unidade;