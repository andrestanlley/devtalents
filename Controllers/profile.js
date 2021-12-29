const Users = require('../database/users')

module.exports = {
    async show(req,res){
        user = req.params.username
        await Users.findOne({
            where: {username: user}
        }).then((data)=>{
            res.render('profile', {username: data.username, age: data.age, firstname: data.firstname, lastname: data.lastname, adress: data.adress, email: data.email, presentation: data.presentation})
            console.log(`PERFIL VISITADO: ${user}`)
        }).catch((error)=>{
            res.render('index', {step: 'firstStep', error: 'Usuário não encontrado.'})
        })


        
    }
}

