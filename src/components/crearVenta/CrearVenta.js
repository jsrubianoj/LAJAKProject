import React from "react";
import './crearVenta.css';

const CrearVenta = () => {

    return (
        <div className="container border border-primary my-5 py-5">
            <h1 className="col-9 mx-auto"> Nueva Venta </h1>

            <form className="form-row col-9 mx-auto">
                <div className="row">
                    <div class="form-group col-md-6">
                        <label>ID Cliente</label>
                        <input type="number" class="form-control" id="inputIDCliente" placeholder="Identificacion Cliente" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Fecha</label>
                        <input type="date" class="form-control" id="inputFecha" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="form-group">
                        <label>Producto</label>
                        <div className="row">
                            <div class="form-group col-md-4 my-1">
                                <input type="number" class="form-control" id="codigoProducto" placeholder="Codigo" />
                            </div>
                            <div class="form-group col-md-4 my-1">
                                <input type="text" class="form-control" id="nombreProducto" placeholder="Nombre" />
                            </div>
                            <div class="form-group col-md-4 my-1">
                                <input type="number" class="form-control" id="precioProducto" placeholder="Precio" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    )

}

export default CrearVenta;