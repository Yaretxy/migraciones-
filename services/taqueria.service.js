//const boom = require('@hapi/boom');
const res = require('express/lib/response');
const db = require('./db.service');
class TaqueriasService {
 constructor(){
 this.generate();
 }
 generate() {
 }
 async create(data) {
    console.log(data);
    const result= await db.query(
      `INSERT INTO tacolizador.taqueria (nombre, calidad, precio, comentario, latitud, longitud, pagina_fb) VALUES
      ( '${data.nombre}',
         ${data.calidad},
          ${data.precio},
          ' ${data.comentario}',
          ${data.latitud},
          ${data.longitud},
          '${data.pagina_fb}')`
    );
    return result;
  }


 async find() {
         const result=await db.query(`SELECT * FROM taqueria`);
         return result;       
 }

 async findOne(id) {
    const result= await db.query(`SELECT * FROM taqueria where id_taqueria=${id}`);
   
       
        return result;
    }


    async update(id, changes) {
        const result= await db.query(
          `UPDATE
        tacolizador.taqueria
         SET
        nombre='${changes.nombre}',
        calidad=${changes.calidad},
        precio =${changes.precio},
        comentario=' ${changes.comentario}',
        latitud=${changes.latitud},
        longitud=${changes.longitud},
        pagina_fb='${changes.pagina_fb}'
         WHERE id_taqueria = ${id};`);
            return result;
    
      }

 async delete(id) {
    const result= await db.query(`Delete FROM taqueria where id_taqueria=${id}`);
    
       
        return result;
    }
}
module.exports = TaqueriasService;
