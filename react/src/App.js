import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import InfoProductos from './components/infoProductos/InfoProductos';
import InfoVentas from './components/infoVenta/InfoVentas';
import CrearVenta from './components/crearVenta/CrearVenta';
import InfoVendedores from './components/infoVendedores/infoVendedores';
import EstadoVenta from './components/estadoVenta/EstadoVenta';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GestionU from './components/gestionU/GestionU';
import { useEffect, useState } from 'react';

function App() {

  const [update, setUpdate] = useState(false)

  useEffect(() => {

    if(localStorage.getItem('tokenventas')){
      setUpdate(true)
    }
    setUpdate(false)
}, [update])

  return (
    <div className="App" >
      <Header />
      <Router setUpdate={setUpdate}>
        <Switch>
          {localStorage.getItem('tokenventas') ?
            <div>
              <Route exact path='/infoproductos' component={InfoProductos }></Route>
              <Route exact path='/infoventas' component={InfoVentas}></Route>
              <Route exact path='/nuevaventa' component={CrearVenta}></Route>
              <Route exact path='/estadoventa' component={EstadoVenta}></Route>
              <Route exact path='/infovendedores' component={InfoVendedores}></Route>
              <Route exact path='/gestionusuarios' component={GestionU}></Route>
            </div> :
            <div>
              <h1> Debes iniciar sesion </h1>
              <Route exact path='/' component={Login}></Route>
            </div>
          }
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
