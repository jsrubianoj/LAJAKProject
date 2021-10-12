const express=require('express')
const router=express.Router();
const Product=require('../database/models/Product')


//create (post se usa para crear o 'postear')
router.post('/', (req,res)=>{
    console.log('req', req.body)
    Product.create(
        req.body
    ).then(product=>{
        res.json(product)
    })
})


//index /api/productos (GET para leer)
router.get('/',(req,res)=>{
    Product.findAll().then(productos=>{
        res.json(productos);
    })
})

//read /api/posts/:id (recibe id y retorna el producto)
router.get('/:id',(req,res)=>{
    Product.findByPk(req.params.id).then(productos=>{
        res.json(productos)
    })
})

//update /api/posts/:id
router.put('/:id',(req,res)=>{
    Product.update({
        name:req.body.name//actualizar los demás parámetros
    },{
        where:{
            id:req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
})

//Delete 
router.delete('/:id',(req,res)=>{
    Product.destroy({
        where:{
            id:req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
})



module.exports=router;






