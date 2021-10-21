import React, { useState } from "react";
import './crearVenta.css';

const CrearVenta = () => {

    const [venta, setVenta] = useState({
        id_cliente: 0,
        nombre_cliente: '',
        codigo_producto: 0,
        nombre_producto: '',
        valor: 0
    })

    const handleChange = (e) => {
        setVenta({
            ...venta,
            [e.target.name]: e.target.value
        })
    }

    const agregarVenta = () => {

        const requestInit = {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(venta)
        }

        fetch('http://localhost:3001/api/ventas/nuevaVenta', requestInit)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => {
            console.log('Error al agregar la venta', error)
        })
        
        setVenta({
            id_cliente: 0,
            nombre_cliente: '',
            codigo_producto: 0,
            nombre_producto: '',
            valor: 0
        })
    }



    return (
        <div className="container border border-primary my-5 py-5">
            <h1 className="col-9 mx-auto"> Nueva Venta </h1>

            <form onSubmit={agregarVenta} className="form-row col-9 mx-auto">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>ID Cliente</label>
                        <input onChange={handleChange} type="number" className="form-control" name="id_cliente" placeholder="Identificacion Cliente" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Nombre Cliente</label>
                        <input onChange={handleChange} type="text" className="form-control" name="nombre_cliente" placeholder="Nombre Cliente" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="form-group">
                        <label>Producto</label>
                        <div className="row">
                            <div className="form-group col-md-4 my-1">
                                <input onChange={handleChange} type="number" className="form-control" name="codigo_producto" placeholder="Codigo" />
                            </div>
                            <div className="form-group col-md-4 my-1">
                                <input onChange={handleChange} type="text" className="form-control" name="nombre_producto" placeholder="Nombre" />
                            </div>
                            <div className="form-group col-md-4 my-1">
                                <input onChange={handleChange} type="number" className="form-control" name="valor" placeholder="Precio" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    )

}

export default CrearVenta;