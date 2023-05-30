
require("dotenv").config();


module.exports = {
    DB: process.env.MONGO_URL,
    PORT: process.env.PORT
}

