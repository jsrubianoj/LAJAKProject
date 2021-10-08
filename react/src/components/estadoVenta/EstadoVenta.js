import React from 'react';
import './estadoVenta.css';

const EstadoVenta = () => {

    return (

            <div className="container">
                <h1 className="title">Estado Venta</h1>
                <form className="GIV"action="/action_page.php">
                <label for="id_venta">ID Venta:</label>
                <input className="input" name="id_venta" type="text" placeholder="ID de la venta" />
                <label for="estado">Estado de la venta:</label>
                <select className="input" name="estado" id="estado">
                    <option value="creacion">Creación</option>
                    <option value="embalaje">Embalaje</option>
                    <option value="despacho">Despacho</option>
                    <option value="ruta">Ruta</option>s
                    <option value="ubicacion">Ubicación</option>
                    <option value="recepcion">Recepción</option>
                </select>
                <br></br>
                <input type="submit" value="ENVIAR" className="submit" name="enviar"/>
                <label for="enviar">Click "Enviar" para actualizar estado de la venta.</label>
                </form>
            </div>
    );
}

export default EstadoVenta