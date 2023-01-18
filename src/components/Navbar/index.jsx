import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mylogo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbedSuitcase, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../icon/CartWidget';
import { CartContext } from '../../context';



const NavbarMenu = () => {

  const { cart } = useContext(CartContext);

  const [totalCartQuantities, setTotalCartQuantities] = useState(0);


  useEffect( () => {

    let newQuantity = 0;

    cart.forEach( (product) => {
      newQuantity = newQuantity + product.quantity;
    });

    setTotalCartQuantities( newQuantity )
  }, [cart])

  return (
    <>
      <Navbar className='navbar-menu' bg="light" variant="light">
        <Container fluid>
          <img src={mylogo} alt="logo" />
          <Nav className="list">
            <Link className='nav-link' to="/">HOME</Link>
            <Link className='nav-link' to="/category/remeras">REMERAS</Link>
            <Link className='nav-link' to="/category/accesorios">ACCESORIOS</Link>
            <Link className='nav-link' to="/category/shorts">SHORTS</Link>
            <Link className='nav-link' to="/category/tops">TOPS</Link>
          </Nav>
          <Link className='cart-link' to="/cart-details">
            <CartWidget cartNumber={totalCartQuantities} />
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;