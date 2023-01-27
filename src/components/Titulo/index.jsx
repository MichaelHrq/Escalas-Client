import { Link } from 'react-router-dom';
import Botao from '../Botao';
import FrequenciaRelatorio from './FrequenciaRelatorio';
import FrequenciaTitulo from './FrequenciaTitulo';

const Titulo = ({titulo, botao, path, frequencia, relatorio}) => {

    console.log(botao)
    console.log(frequencia)
    console.log(relatorio)

    return ( 

        <div className="h1 mt-5 mb-4 ">

            { !frequencia && !relatorio &&

                <div className='d-flex'>

                    <p className="h1"> {titulo} </p>

                    { botao &&
                        <div className='ms-3' style={{ heith: '80%' }}>
                            <Link to={path} >
                                <Botao text={'adicionar'}/>
                            </Link>
                        </div>
                    }
                </div>
            }

            { frequencia && <FrequenciaTitulo titulo={titulo} /> }

            { relatorio && <FrequenciaRelatorio titulo={titulo} /> }


            
            <p className="border-bottom border-ligth border-1" />

        </div>

     );
}
 
export default Titulo;