const Users = require('../database/users')
const { Op } = require("sequelize");


module.exports={
    async check(req,res){
        const username = req.body.user

        VerifyExist = await Users.findOne({
            where: {username}
        })

        if(VerifyExist){
           return res.render('index', {step: 'firstStep'})
        }
        return res.render('index', {step: 'secondStep'})
    },
    presentation(req,res){
        res.render('presentation', {step: 'thirdStep'})
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
                return res.status(401).send('Usuario já cadastrado.')
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