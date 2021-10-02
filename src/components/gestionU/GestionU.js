import React from 'react'
import './gestionU.css'
const GestionU = () => {
    return (
        <div>
            <h2 id="titulo">Gestión de usuarios</h2>

<main>

    <h4 class="texto">Seleccione los datos para actualizar la información de usuario</h4>

    <form class="form">

        <p>Seleccione el nuevo rol de usuario</p>
        <input type="checkbox" id="administrador" name="administrador" value="administrador"/>
        <label for="administrador"> Administrador</label>
        <br/>
        <input type="checkbox" id="vendedor" name="vendedor" value="vendedor"/>
        <label for="vendedor"> Vendedor</label><br/>
    </form>

    <br/>
    <form class="form">
        <p>Seleccione el nuevo estado de usuario</p>

        <input type="checkbox" id="autorizado" name="autorizado" value="autorizado"/>
        <label for="autorizado"> Autorizado</label><br/>
        <input type="checkbox" id="noAutorizado" name="noAutorizado" value="noAutorizado"/>
        <label for="noAutorizado"> No autorizado</label><br/>
        <input type="checkbox" id="pendiente" name="pendiente" value="pendiente"/>
        <label for="pendiente"> Pendiente</label><br/>
    </form>

    
    <br/>
    <button class="centerbutton" type="submit" onclick="funcion()">Actualizar</button>
    </main>
     </div> 
    )


}
export default GestionU
