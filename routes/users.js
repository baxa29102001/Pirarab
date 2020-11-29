const { query, queryAll } = require('../database')

const getUsers = async (req, res) => {
    let users = await query('SELECT * FROM users');
    let posts = await  query('SELECT * FROM posts')
    let comments = await  query('SELECT * FROM comments')
    res.json({
        users: {
            post: posts,
            comment:comments
        }
        
    })   
}


const getUserOne = (req, res) => {
    
}

const updateUsers = async (req, res) => {
    let { id } = req.params
    let data = await query('SELECT * FROM users WHERE id = $1', [id])
    let update = data.users = 'Baxa2910'
    let param = [update,id]
    let updateUser = await query('UPDATE users SET users = $1 WHERE id = $2 RETURNING *', param)
     res.json(updateUser)
}

const delUser = async (req, res) => {
    let { id } = req.params

    let da = [id]
    try {
        let data = await query('DELETE FROM users WHERE id = $1 RETURNING *', da)
     
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}



module.exports = { getUsers, getUserOne, updateUsers,delUser}