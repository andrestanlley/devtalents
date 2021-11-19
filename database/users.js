const connection = require('./index')


const Users = connection.define('users',{
    username: {
        type: connection.Sequelize.STRING,
        AllowNull: false,
        unique: true
    },
    firstname: {
        type: connection.Sequelize.STRING,
        AllowNull: false,
    },
    lastname: {
        type: connection.Sequelize.STRING,
        AllowNull: false,
    },
    email: {
        type: connection.Sequelize.STRING,
        AllowNull: false,
        unique: true
    },
    presentation: {
        type: connection.Sequelize.STRING,
        AllowNull: false,
    }
})

module.exports = Users
