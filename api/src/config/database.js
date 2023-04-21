const mongoose = require('mongoose');
const CONFIG = require('./config.js');


module.exports = {
    
    connection: null,
    
    connect: () => {
        mongoose.Promise = global.Promise;
        if (this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB, {useUnifiedTopology: true, useNewUrlParser: true}).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa :D');
        }).catch(err => console.log(err))
    }
}