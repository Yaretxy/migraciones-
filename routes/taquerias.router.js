const express = require('express');
const TaqueriasService = require('../services/taquerias.service');
const router = express.Router();
const service = new TaqueriasService();

router.get('/',async function(req,res,next){});
router.get('/:id',async function(req,res,next){});
router.post('/',async function(req,res,next){});
router.put('/:id',async function(req,res,next){});
router.delete('/:id',async function(req,res,next){
    try {
    res.json(await service.delete(
    req.params.id));
    } catch (error) {
    next(error);
    }
   });
   
  