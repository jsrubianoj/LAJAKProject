import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InfoVentas from './components/infoVenta/InfoVentas';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleVenta from './components/detalleVenta/DetalleVenta';
import CrearVenta from './components/crearVenta/CrearVenta';
import InfoVendedores from './components/infoVendedores/infoVendedores';
import EstadoVenta from './components/estadoVenta/EstadoVenta';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GestionU from './components/gestionU/GestionU';

ReactDOM.render(
  <React.StrictMode>
   <Header/>
   <InfoVendedores />
   <GestionU/>
   <EstadoVenta/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
