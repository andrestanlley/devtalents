const connection = require('./index')


const Users = connection.define('users',{
    username: {
        type: connection.Sequelize.STRING(30),
        AllowNull: false,
        unique: true
    },
    firstname: {
        type: connection.Sequelize.STRING(30),
        AllowNull: false,
    },
    lastname: {
        type: connection.Sequelize.STRING(30),
        AllowNull: false,
    },
    email: {
        type: connection.Sequelize.STRING(50),
        AllowNull: false,
        unique: true
    },
    presentation: {
        type: connection.Sequelize.STRING(300),
        AllowNull: false,
    }
})

module.exports = Users
