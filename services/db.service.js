const { config } = require("../configs/config");

async function query(sql){
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql);

    if(!results){
        return [];
    }
    return results;
};
module.exports = query;