require('dotenv').config()

module.exports = {
    logging: false,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    define: {
        timestamps: true,
        underscored: true
    }
}

