import React, { useEffect, useState } from 'react';
import { Home } from './pages';
import { NavbarMenu, Card} from './components';
import { useFetch } from './hooks/useFetch';
import { URL_BASE, URL_ENDPOINTS } from './constants/services';
import Router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const { data: user, error, loading } = useFetch(`${URL_BASE}${URL_ENDPOINTS.USERS}`);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className="App">
        <header className="App-header">
          <NavbarMenu></NavbarMenu>
        </header>
         
        <Router />
  
      </div>

  )
}



export default App;