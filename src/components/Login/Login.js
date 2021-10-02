import React from 'react'
import './login.css';
const Login = () => {
    return (
        <div>
            <header>
            <h1 className='title'> Ingreso al sistema de información </h1>
            </header>
            <main>
                <div >
                <img src="./../img/lajak.png" alt="imagen" className ="logo" />
                </div>
            <form className="login">
                <input type ="text"  placeholder="Ingrese su nombre" className ='input' />
                <input type ="password"  placeholder="Ingrese su Contraseña" className ='input'/>
                <button className ="centerbutton" type ="submit" > Ingresar</button>
                <button className ="buttontext" type ="reset"> Olvide mi contraseña </button>
            </form>
            </main>
        </div>
    )
}

export default Login
