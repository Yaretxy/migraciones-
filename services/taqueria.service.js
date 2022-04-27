const boom = require('@hapi/boom');
const res = require('express/lib/response');
const db = require('./db.service');
class TaqueriasService {
 constructor(){
 this.generate();
 }
 generate() {
 }
 async create(data) {
     const result = await db.query(`INSERT INTO tacolizador(nombre,calidad,precio,latitud,longitud,paguina_fb) VALUES ('${data.nombre}','${data.calidad}','${data.precio}'`);
     let = message = 'Error al crear tabla';
     if(result.affectedRows){
        message='se creo correctamemte';
    }
    return message;

 }
 async find() {
         const result=await db.query(`SELECT * FROM tacolizador`);
         return result;       
 }

 async findOne(id=1) {
         
         const result=await db.query(`SELECT * FROM tacolizador WHERE id=${id}`);
         
        return result;
 }
 async update(id, changes) {
    const result= await db.query(`UPDATEtacolizador SET 
    nombre ="${changes.nombre}" WHERE id=${id})`);
    let message = 'Error en modificar';
    if(result.affectedRows){
        message='se modifico correctamemte';
    }
    return message;

 }
 async delete(id) {
    const result= await db.query(`Delete FROM taqueria where id_taqueria=${id}`);
    let message = 'Error al eliminar el heroes';
        if(result.affectedRows){
            message='se elimino correctamemte';
        }
        return message;
 }
}
module.exports = TaqueriasService;
