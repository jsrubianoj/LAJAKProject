import React from 'react'
import './header.css'

const header = () => {

    const toggle=()=>{
        document.querySelectorall("a").classList.add("active");
    }

    return (
        <div>
            <div class="header">
            <a href="/" className="logo">LAJAK</a>
            <div className="header-right">
                <a href="/">Inicio</a>
                <a id="info" onClick={toggle} href="/infoproductos">Información productos</a>
                <a id="info" onClick={toggle} href="/infoventas">Información ventas</a>
                <a href="/nuevaventa">Nueva venta</a>
                <a href="/estadoventa">Estado de ventas</a>
                <a href="/infovendedores">Información vendedores</a>
                <a href="/gestionusuarios">Gestión de usuarios</a>
            </div>
            </div>
        </div>
    )
}

export default header

