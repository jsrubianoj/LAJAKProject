const express = require('express')
const router = express.Router()

router.get('/infoVentas', (req, res) => {
    res.send({
        message: 'Vendedores'
    })
})

router.post('/nuevaVenta', (req, res) => {

})

module.exports = router 