import React from 'react'
import './login.css';
const Login = () => {
    return (
        <div>

            <h1 className='title'> Ingreso al sistema de información </h1>

            <main>
            <div >
            <img src="./img/lajak.png" alt="imagen" class ="logo" />
            </div>
            <form className="login">
            <input type ="text"  placeholder="Ingrese su nombre" class ='input' />
            <input type ="password"  placeholder="Ingrese su Contraseña" class ='input'/>
            <button class ="centerbutton" type ="submit" > Ingresar</button>
            <button class ="buttontext" type ="reset"> Olvide mi contraseña </button>
            </form>
            </main>
        </div>
    )
}

export default Login
