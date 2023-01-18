import React, { useState, useContext} from 'react';
import { Home } from './pages';
import { NavbarMenu, Card } from './components';
import { useFetch } from './hooks/useFetch';
import { URL_BASE, URL_ENDPOINTS } from './constants/services';
import Router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider,CartContext } from './context';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const { cart } = useContext(CartContext);

  const { data: user, error, loading } = useFetch(`${URL_BASE}${URL_ENDPOINTS.USERS}`);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <CartProvider>
        <header className="App-header">
          <NavbarMenu  onHandlerCart={onHandlerCart} user={user[0]}/>
        </header>

        <Router />
      </CartProvider>
    </div>

  )
}



export default App;