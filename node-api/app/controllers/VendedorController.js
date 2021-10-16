const Vendedor = require('../models/Vendedor')

const getVendedor = async (req, res) => {

    const vededor = await Vendedor.findAll({})

    res.send({
        data: vendedor
    })

}

const AddVendedor = async (req, res) => {

    try {

        const { nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion } = req.body

        const vendedor = await Vendedor.create({
            nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion
        })

        res.send({
            data: vendedor
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }

}

const UpdateVendedor = async (req, res) => {
    
    try {

        const idvendedor = req.params.id
        const { nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion } = req.body

        const vendedor = await Vendedor.update({
            nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion
        }, {
            where: { id: identificacion}
        })

        res.send({
            data: vendedor
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }
    
}