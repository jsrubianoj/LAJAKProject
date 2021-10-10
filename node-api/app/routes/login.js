const express = require('express')
const router = express.Router()
const { LoginController } = require('../controllers/LoginController')

//routa api/login

router.post('/', LoginController)

router.get('/', (req, res)=> {
    res.send({msg: 'login'})
})

module.exports = router 