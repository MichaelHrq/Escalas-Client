

const Lotacao = ({titulo,conteudo}) => {
    return ( 
        <small>
            <div className="text-start fw-bolder">{titulo}</div>
            <div className="text-start text-wrap">{conteudo}</div>
        </small>
     );
}
 
export default Lotacao;