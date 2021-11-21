const { Sequelize } = require('sequelize/types')
const connection = require('./index')


const stacks = connection.define('stacks', {
    username: {
        type: Sequelize.STRING,
        AllowNull: false,
        unique: true
    },
    team: {
        type: Sequelize.STRING(2),
        AllowNull: false
    },
    stacks: {
        type: Sequelize.STRING,
        AllowNull: false
    }
})

module.exports = stacks