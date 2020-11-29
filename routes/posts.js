
const { query, queryAll } = require('../database')

const postOne = async (req, res) => {
    let {users} = req.body
    let params =[users]
    try {
        let data = await query('INSERT INTO users(users) VALUES($1) RETURNING *', params)
        console.log(data)
        res.status(201).json(data)
        
    } catch (error) {
        console.log(error)
    }
}


const getPosts = async (req, res) => {
    let users = await queryAll('SELECT * FROM posts') 
    res.json(users)
}


module.exports =  { postOne, getPosts }