require('dotenv').config()

module.exports = {
    logging: false,
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    define: {
        timestamps: true,
        underscored: true
    }
}

