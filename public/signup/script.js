let photo = document.getElementById('photo')
let next = document.getElementById('next')
let user = document.getElementById('user')
let firstname = document.getElementById('name')
let lastname = document.getElementById('lastname')
let showname = document.getElementById('nm')
let defaultphoto = 'https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png'
let presentation = document.getElementById('presentation')
let CaracterLimiter = document.getElementById('CaracterLimiter')



const BNext = {
    allow: ()=> {
        next.style.pointerEvents = "auto"
        next.style.cursor = "pointer"
        next.style.background = "#131a2d"
    },
    block: ()=>{
        next.style.pointerEvents = "none"
        next.style.background = "grey"
    }
}

function LabelCorretor(text){
    let FinalText = text.replace(text[0],text[0].toUpperCase())
    .replaceAll(text.substr(1),text.substr(1).toLowerCase())
    .replaceAll(' ','')
    return FinalText
}