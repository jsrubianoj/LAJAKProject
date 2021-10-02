import React from 'react'
import './header.css'

const header = () => {
    return (
        <div>
            <div class="header">
            <a href="#default" class="logo">LAJAK</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            </div>
        </div>
    )
}

export default header

