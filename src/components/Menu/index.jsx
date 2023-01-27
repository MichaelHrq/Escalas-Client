import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import Logo from '../Logo'


function Menu() {

  const {keycloak} = useKeycloak()

  return (
    <Navbar bg="light" expand="lg" className='shadow-sm'>
      <Container>
        
        <Navbar.Brand as={Link} to={'inicio'}><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around fs-6" style={{width:'100%'}}>
            <Nav.Link as={Link} to={'inicio'}><span className="fs-6 fw-bolder">Início</span></Nav.Link>
            <Nav.Link as={Link} to={'unidade'}><span className="fs-6 fw-bolder">Unidades</span></Nav.Link>
            <Nav.Link as={Link} to={'setores'}><span className="fs-6 fw-bolder">Setores</span></Nav.Link>
            <Nav.Link as={Link} to={'usuarios'}><span className="fs-6 fw-bolder">Usuários</span></Nav.Link>
            <Nav.Link as={Link} to={'feriados'}><span className="fs-6 fw-bolder">Feriados</span></Nav.Link>
            <Nav.Link as={Link} to={'escalas'}><span className="fs-6 fw-bolder">Escalas</span></Nav.Link>
            <Nav.Link as={Link} to={'profissionais'}><span className="fs-6 fw-bolder">Profissionais</span></Nav.Link>
            <Nav.Link as={Link} to={'frequencia'}><span className="fs-6 fw-bolder">Frequência</span></Nav.Link>
            <Nav.Link as={Link} to={'gdc'}><span className="fs-6 fw-bolder">GDC</span></Nav.Link>
            <Nav.Link as={Link} to={'mudar-senha'}><span className="fs-6 fw-bolder">Mudar Senha</span></Nav.Link>
            <Nav.Link onClick={()=> keycloak.logout()}><span className="fs-6 fw-bolder">Sair</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;