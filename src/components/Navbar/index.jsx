import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mylogo from '../../assets/logo.png';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../icon/CartWidget';



const NavbarMenu = () => {
  return (
    <>
      <Navbar className='navbar-menu' bg="light" variant="light">
        <Container fluid>
        <img src={mylogo}  alt="logo" />
          <Nav className="list">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/category/remeras">REMERAS</Nav.Link>
            <Nav.Link href="/category/accesorios">ACCESORIOS</Nav.Link>
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