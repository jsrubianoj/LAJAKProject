import React from 'react'
import './header.css'

const header = () => {
    return (
        <div>
            <div class="header">
            <a href="/" className="logo">LAJAK</a>
            <div className="header-right">
                <a className="active" href="/">Inicio</a>
                <a href="/infoventas">Información ventas</a>
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

