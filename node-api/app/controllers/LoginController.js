const User = require('../models/User')

const LoginController = async (req, res) => {

    const { email, password } = req.body

    const DB_User = await User.findOne({
        where:  { email }
    })
    
    const check = await compareEncrypt(password, DB_User.password)
    const token = await createToken(DB_User)

    if(check){
        res.send({
            data: DB_User,
            token
        })
    } else {
        res.send({
            msg: "El usuario o la contraseña son incorrectos"
        })
    }
}

module.exports = { LoginController }