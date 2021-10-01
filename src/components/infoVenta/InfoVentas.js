import React from 'react';
import './InfoVentas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ventas } from '../../data/ventas';
import { useState } from 'react';

const InfoVentas = () => {

    const [keyword, setKeyword] = useState('')

    const writeText = (keyword) => {
        keyword.preventDefault()
        setKeyword(keyword.target.value)
        console.log(keyword.target.value)
    }

    return (
        <div className="container">
            <h1 className="my-5"> Registro de ventas </h1>

            <div className="d-flex">
                <a href="/nuevaVenta" className="bg-color btn-add py-2 px-3">
                    Agregar Venta <FontAwesomeIcon icon={faPlus} className="mx-1" />
                </a>

            </div>
            <table className="table text-center border my-4">
                <thead className="bg-color">
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-2">ID Venta</th>
                        <th className="col-2">ID Cliente</th>
                        <th className="col-3">Nombre del Cliente</th>
                        <th className="col-2">Precio Total</th>
                        <th className="col-2">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(venta => {
                        return (
                            <tr>
                                <th> {venta.id} </th>
                                <td> {venta.idVenta} </td>
                                <td> {venta.idCliente} </td>
                                <td> {venta.nombreCliente} </td>
                                <td> ${venta.precioTotal} </td>
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
    )

}

export default InfoVentas;