const express = require('express')
const path = require('path')
const signup = require('./routes/signup')
const profile = require('./Controllers/profile')
require('dotenv').config()
const app = express()


app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.render('index', {step: 'firstStep', error: ''})
})
app.use('/signup', signup)
app.use('/:username', profile.show)




app.listen(process.env.PORT, ()=>{
    console.log(`Server rodando na porta ${process.env.PORT}`)
})
