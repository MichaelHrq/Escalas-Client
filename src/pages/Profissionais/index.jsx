import Titulo from "../../components/Titulo";
import Table from 'react-bootstrap/Table';
import {Container } from 'react-bootstrap';
import Lotacao from "./components/Lotacao";
import Botoes from "./components/Botoes";



const Profissionais = () => {

    const tab = [
        {
            nome : 'Zoraide Almeida Barroso',
            conselho: '625282',
            categoria: 'Enfermeiros',
            lotacao: {
                titulo: 'Hospital e Pronto Socorro 28 de Agosto',
                conteudo: 'CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | CLASSIFICAÇÃO DE RISCO | INTENSIVISTA | Sala Rosa | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO |Emergencia | Emergência | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO | Emergência | CLASSIFICAÇÃO DE RISCO | Classificação de Risco | Classificação de Risco | CLASSIFICAÇÃO DE RISCO | NUCLEO DE REGULACAO DE LEITOS - NIR'
            },
        },
        {
            nome : 'Abiudes Dias Reis',
            conselho: '967670',
            categoria: 'Técnicos de Enfermagem',
            lotacao: {
                titulo: 'Instituto da Criança - ICAM',
                conteudo: 'CENTRO CIRÚRGICO | COORDENAÇÃO ISOLAMENTO | Semi Intensiva 1 | ALOJAMENTO CONJUNTO - ALCON / ADMISSÃO | Emergência - Diurno'
            },
        },
        {
            nome : 'Ada de Carvalho Valentim',
            conselho: '305592',
            categoria: 'Enfermeiros',
            lotacao: {
                titulo: 'Maternidade Ana Braga',
                conteudo: 'UCP | AMBULATÓRIO | CRECHE | EXPURGO E EMERGENCIA'
            },
        },

    ]

    return (

        <Container>

            <Titulo titulo={'Profissionais'} botao={true} path={'adicionar'}/>

            <Table responsive="md" >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Conselho</th>
                        <th>Categoria</th>
                        <th>Lotação</th>
                        <th></th> {/* botao apagar */}
                    </tr>
                </thead>
                <tbody>
                    {tab.map( profs => {
                        return(
                            <tr key={profs.nome} >
                                <td style={{ color:'#337ab7' }}><strong>{profs.nome}</strong></td>
                                <td className='text-center' >{profs.conselho}</td>
                                <td className='text-center' >{profs.categoria}</td>
                                <td className='text-center' >
                                    <Lotacao titulo={profs.lotacao.titulo} conteudo={profs.lotacao.conteudo}/>
                                </td>
                                <td><Botoes/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </Container>

     );
}
 
export default Profissionais;