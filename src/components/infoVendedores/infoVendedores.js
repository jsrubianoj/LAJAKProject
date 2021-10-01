import React from 'react';
import './infoVendedores.css';

const InfoVendedores = () => {

    return (

        <div className="container">
            <h1 className="title">INFORMACIÓN DE LOS VENDEDORES</h1>

              
            
            <form className="GIV">

                <label>Código del vendedor:</label>
                <input type="int" placeholder="" className="input"/>

                <div>
                    <label>Primer nombre:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>
                <div>
                    <label>Segundo nombre:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>
                <div>
                    <label>Primer apellido:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>
                <div>
                    <label>Segundo apellido:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>
                
                <div>
                    <label>Tipo de identificacion:</label>
                    <select name="Tipo de identificacion" className="input">
                        <option> </option>
                        <option>Cédula de ciudadania</option>
                        <option>Cédula de extrajera</option>
                        <option>Pasaporte</option>
                        <option>NIT</option>
                    </select>
                </div>

                <div>
                    <label>Número de identificación:</label>
                    <input type="int" placeholder="" className="input"/>
                </div>

                <div>
                    <label>Correo electronico:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>

                <div>
                    <label>Número de celular:</label>
                    <input type="int" placeholder="" className="input"/>
                </div>

                <div>
                    <label>País:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>

                <div>
                    <label>Departamento/Estado:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>

                <div>
                    <label>Ciudad:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>

                <div>
                    <label>Dirección:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>

                <div className="botton">
                    <button type="submit" className="submit">GUARDAR</button>
                </div>

                <div class="botton">
                    <button type="submit" className="submit">CANCELAR</button>
                </div>

            </form>

        </div>
    );
}

export default InfoVendedores