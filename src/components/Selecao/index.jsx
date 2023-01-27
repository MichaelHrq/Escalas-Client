import Form from 'react-bootstrap/Form';

const Selecao = ({nome, change}) => {

  const Selecionado = (item) => {
    change(item.target.value)
  }

  const opcoes = [
    '1 ',
    '2 ',
    '3 ',
  ]

  return (

    <div className='mb-4'>

        <div className='fs-6 fw-bolder'>
          {nome}
        </div>

        <Form.Select
        aria-label="Default select example"
        onChange={item => Selecionado(item)}
        >
          <option disabled selected></option>
          {opcoes.map( opcao => {
            return(
              <option name={nome} key={opcao} value={opcao} >{opcao}</option>
            )
          })}
        </Form.Select>

    </div>

  );
}

export default Selecao;