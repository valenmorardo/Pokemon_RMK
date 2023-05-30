
require("dotenv").config();


module.exports = {
    PORT: process.env.MONGOPORT,
    /* DB: `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`   */
    DB: process.env.MONGO_URL
}

