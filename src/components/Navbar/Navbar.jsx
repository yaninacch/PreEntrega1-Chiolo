import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mylogo from '../../assets/logo.png';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../icon/CartWidget';


function NavbarMenu() {
  return (
    <>
      <Navbar className='navbar-menu' bg="light" variant="light">
        <Container fluid>
        <img src={mylogo}  alt="logo" />
          <Nav className="list">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#home">¿QUIÉNES SOMOS?</Nav.Link>
            <Nav.Link href="#features">PRODUCTOS</Nav.Link>
            <Nav.Link href="#features">OFERTAS</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
          </Nav>
          <CartWidget cartNumber={2}/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;