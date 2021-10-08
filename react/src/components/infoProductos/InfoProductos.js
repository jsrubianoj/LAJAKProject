import React from 'react';
import './InfoProductos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { productos } from '../../data/productos';

const InfoProductos = () => {
    return (
        <div className="container">
            <h1 className="my-5"> Registro de productos </h1>

            <div className="d-flex">
                <a href="/nuevaVenta" className="bg-color btn-add py-2 px-3">
                    Agregar Producto <FontAwesomeIcon icon={faPlus} className="mx-1" />
                </a>

            </div>
            <table className="table text-center border my-4">
                <thead className="bg-color">
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-2">Código de barras</th>
                        <th className="col-3">Nombre del Producto</th>
                        <th className="col-2">Referencia interna</th>
                        <th className="col-2">Precio Total</th>
                        <th className="col-2">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => {
                        return (
                            <tr>
                                <th> {producto.id} </th>
                                <td> {producto.codigoBarras} </td>
                                <td> {producto.nombreProducto} </td>
                                <td> {producto.referenciaInterna} </td>
                                <td> ${producto.precioUnitario} </td>
                                <td>
                                    <a href="/" className="mx-2 text-primary"> <FontAwesomeIcon icon={faEdit} /> </a>
                                    <a href="/" className="mx-2 text-danger"> <FontAwesomeIcon icon={faTrash} /> </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default InfoProductos;