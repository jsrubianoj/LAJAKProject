const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Usuario = require('../models_laura/Usuario_laura');


//POST

router.post('/usuario', (req, res) => {
    console.log('req', req.body);

    Usuario.create(
        req.body

    ).then(usuario => {
        res.json(usuario);

    })

});

//GET

router.get('/', (req, res)=>{
    Usuario.findAll().then(usuarios=> {
        res.json(usuarios);
    })
})

//UPDATE

router.put('/:id', (req,res) => {

    Usuario.update({
        estado: req.body.estado
    },{
        where: {
            id:req.params.id
        }
    }).then(result => {
        res.json(result);
    });

});

//DELETE

router.delete('/:id', (req, res)=> {
    Usuario.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;





