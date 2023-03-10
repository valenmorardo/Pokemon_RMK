const Database = require('../config/database.js');
const CONFIG = require('../config/config.js');
const app = require('../app.js');

Database.connect();

app.listen(CONFIG.PORT, err => {
    if (err) return console.log(err)
    console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);
})