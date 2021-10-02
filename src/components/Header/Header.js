import React from 'react'
import './header.css'

const header = () => {
    return (
        <div>
            <div className="header">
                <a href="/" className="logo">LAJAK</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </div>
    )
}

export default header

