const JWT = require('jsonwebtoken')

const SECRET_WORD = 'baxa'

let user = {
    name:"Bohodir"
}

const token = JWT.sign(user, SECRET_WORD)

