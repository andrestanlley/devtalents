const express = require('express')
const path = require('path')
const signup = require('./routes/signup')
const profile = require('./routes/profile')
require('dotenv').config()
const app = express()
const Users = require('./database/users')


app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req,res)=>{
    res.render('index', {part:'su1', error: ''})
})

app.use('/signup', signup)
app.use('/', profile)


app.listen(5000, ()=>{
    console.log(`Server rodando na porta ${process.env.PORT}`)
    Users.sync({force: true})
    console.log('Usuarios apagados.')
})
