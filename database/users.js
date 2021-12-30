const connection = require('./index')


const Users = connection.define('users',{
    username: {
        type: connection.Sequelize.STRING(30),
        AllowNull: false,
        unique: true
    },
    age: {
        type: connection.Sequelize.INTEGER,
        AllowNull: false
    },
    firstname: {
        type: connection.Sequelize.STRING(30),
        AllowNull: false,
    },
    lastname: {
        type: connection.Sequelize.STRING(30),
        AllowNull: false,
    },
    adress: {
        type: connection.Sequelize.STRING(150),
        AllowNull: false
    },
    email: {
        type: connection.Sequelize.STRING(50),
        AllowNull: false,
        unique: true
    },
    presentation: {
        type: connection.Sequelize.STRING(300),
        AllowNull: false,
    },
    Stacks: {
        type: connection.Sequelize.STRING(500),
        AllowNull: false
    }
})

module.exports = Users
Users.sync({force: true})