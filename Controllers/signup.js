const Users = require('../database/users')
const { Op } = require("sequelize");


module.exports={
    async check(req,res){
        let username = req.body.user

        if(username[0] == '@'){
            username = username.substr(1)
        }

        //username = username.toLowerCase().replaceAll(' ','')

        VerifyExist = await Users.findOne({
            where: {username}
        })

        if(VerifyExist){
           return res.render('index', {step: 'firstStep', error: 'Usuário já cadastrado.'})
        }
        return res.render('index', {step: 'secondStep', error: ''})
    },
    presentation(req,res){
        res.render('presentation', {step: 'thirdStep', error: ''})
    },
    async register(req,res){
        try {
            const {username, firstname, lastname, email, presentation}=req.body
            if(!username || !firstname || !lastname || !email || !presentation){
                return res.status(400).send('Preencha todos os campos.')
            }
            const usersAlreadyExists = await Users.findOne({
                where:  {[Op.or]: [{username}, {email}]}
            })
            if(usersAlreadyExists){
                return res.status(226).send('Usuario já cadastrado.')
            }
            const response = await Users.create({
                username,
                firstname,
                lastname,
                email,
                presentation
            })
                console.log(`USUÁRIO ${username.toUpperCase()} CADASTRADO.`)
                return res.status(201).send('Usuario cadastrado.')
        } catch (error) {
            return res.status(500).send('Ocorreu um erro. Revise os dados.')
        }
        
    }
}