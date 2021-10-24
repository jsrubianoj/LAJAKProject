import { React, useState } from 'react'
import './login.css';
import logo from './logo.png';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const iniciarSesion = (e) => {
        
        e.preventDefault()
        const requestInit = {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user)
        }

        fetch('https://api-lajak.herokuapp.com/api/login/', requestInit)
        .then(res => res.json())
        .then(data =>
            localStorage.setItem('tokenventas', data.token)    
        )
        .catch(error => {
            console.log('Error al iniciar sesion', error)
        })
        setUser({
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <h1 className='title'> Ingreso al sistema de información </h1>
            <main>
                <div>
                    <img src={logo} alt="imagen" className="logo" />
                </div>
                <form onSubmit={iniciarSesion} className="login">
                    <input type="email" name="email" onChange={handleChange} placeholder="Ingrese su email" className='input' />
                    <input type="password" name="password" onChange={handleChange} placeholder="Ingrese su Contraseña" className='input' />
                    <button className="centerbutton" type="submit">Ingresar</button>
                    <button className="buttontext" type="reset"> Olvide mi contraseña </button>
                </form>
            </main>
        </div>
    )
}

export default Login
