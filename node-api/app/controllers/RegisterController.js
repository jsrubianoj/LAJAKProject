// const { encrypt } = require('../helpers/bcryptHelper')
const UserModel = require('../models/User')

const RegisterUser = async (req, res) => {

    try {
        
        const { nombre, email, password } = req.body
    //    const hashPass = await encrypt(password)    

        const user = await UserModel.create({
            nombre,
            email,
            password
        })
    
        res.send({
            data: user
        })

    } catch (error) {

        res.send({
            error,
            msg: "Error al crear usuario"
        })
        
    }

}

module.exports = { RegisterUser }