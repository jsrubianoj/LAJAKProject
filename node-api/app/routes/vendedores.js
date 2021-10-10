const express = require('express')
const router = express.Router()

router.get('/infoVendedores', (req, res) => {
    res.send({
        message: 'Vendedores'
    })
})

module.exports = router 