import React from 'react'
import './header.css'

const header = () => {
    return (
        <div>
            <div class="header">
            <a href="#default" class="logo">LAJAK</a>
            <div class="header-right">
                <a class="active" href="#home">Inicio</a>
                <a href="#contact">Información vendedores</a>
                <a href="#about">Información ventas</a>
                <a href="#about">Maestro estado de ventas</a>
                <a href="#about">Estado de ventas</a>
            </div>
            </div>
        </div>
    )
}

export default header

