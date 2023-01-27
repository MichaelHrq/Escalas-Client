import { BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "../components/Menu";
import Inicio from '../pages/Inicio'
import Unidade from "../pages/Unidades";
import UnidAdicionar from "../pages/Unidades/addUnidade";
import Setores from "../pages/Setores";
import Usuario from "../pages/Usuários";
import Feriados from "../pages/Feriados";
import Escalas from "../pages/Escalas";
import Profissionais from "../pages/Profissionais";
import Licenca from "../pages/Profissionais/Licenca";
import AddProfissional from "../pages/Profissionais/addProfissional";
import Frequencia from "../pages/Frequencia";
import Relatorio from "../pages/Frequencia/Relatorio";
import AddFeriado from "../pages/Feriados/AddFeriado";
import Diaria from "../pages/Frequencia/Diaria";
import GDC from "../pages/GDC";

const AppRoute = () => {

    return ( 

        <BrowserRouter>

            <Menu/>
            
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="inicio" element={<Inicio/>} />

                <Route path="unidade" element={<Unidade/>} />
                <Route path="unidade/adicionar" element={<UnidAdicionar/>} />

                <Route path="setores" element={<Setores/>} />

                <Route path="usuarios" element={<Usuario/>} />

                <Route path="feriados" element={<Feriados/>} />
                <Route path="feriados/adicionar" element={<AddFeriado/>} />

                <Route path="escalas" element={<Escalas/>} />

                <Route path="profissionais" element={<Profissionais/>} />
                <Route path="profissionais/adicionar" element={<AddProfissional/>} />
                <Route path="profissionais/licenca" element={<Licenca/>} />

                <Route path="frequencia" element={<Frequencia/>} />
                <Route path="frequencia/relatorio" element={<Relatorio/>} />
                <Route path="frequencia/relatorio/diaria" element={<Diaria/>} />

                <Route path="gdc" element={<GDC/>} />

                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>


        </BrowserRouter>
        
     );
}
 
export default AppRoute;