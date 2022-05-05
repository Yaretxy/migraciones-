const express = require('express');
const TaqueriasService = require('../services/taqueria.service');
const router = express.Router();
const service = new TaqueriasService();
//const taqueria = require('../services/taqueria.service');

//todos los datos
router.get('/',async function(req,res,next){
    try {
        
    res.json(await service.find(req.query)); 
    } catch (error) {
        console.log(`Error al obtener datos de taquerias`,error);
        next (error);
    }
});

//trai un registro
router.get('/:id',async function(req,res,next){
    try {
    res.json(await service.findOne(req.params.id));

    } catch (error) {
        console.log(`error al obtener registro`);
    next(error);
    }
   });

//crear datos
   router.post('/',async function(req,res,next){
    try {
        res.json(await service.create(req.body));
        
    } catch (error) {
        console.log(`Error mientras se creaba el registro`,error.message);
        next(error);
        
    }

});

//ediitar
router.put('/:id',async function(req,res,next){
    try {
        res.json(await service.update(
            req.params.id,req.body))
    } catch (error) {
        console.error(`Error mientras se creaba el registro`,
        error.message);
        next(error);
    }
  });


//delete
router.delete('/:id',async function(req,res,next){
    try {
    res.json(await service.delete(req.params.id));

    } catch (error) {
        console.log(`error al eliminar registro`);
    next(error);
    }
   });


   module.exports= router;
   
  