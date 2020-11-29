const { query, queryAll } = require('../database')

const getComments = async (req, res) => {
    let users = await query('SELECT * FROM comments') 
    res.json(users)
}



module.exports = { getComments }