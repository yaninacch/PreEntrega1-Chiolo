import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarMenu></NavbarMenu>
      </header>
      <ItemListContainer greeting="Item List Container working!"></ItemListContainer>

    </div>
  );
}

export default App;
