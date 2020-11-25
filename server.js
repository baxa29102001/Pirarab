
const express = require('express')
const app = express()
const { query, queryAll } = require('./database')
app.use(express.json())

app.get('/user', async (req, res) => {
    let users = await query('SELECT * FROM users') 
    
    res.json(users)
})

app.get('/posts', async (req, res) => {
    let users = await queryAll('SELECT * FROM posts') 
    // console.log(users)
    res.json(users)
})
app.get('/comments', async (req, res) => {
    let users = await query('SELECT * FROM comments') 
 
    res.json(users)
})


app.post('/users', async (req, res) => {
    let {users} = req.body
    let params =[users]
    try {
        let data = await query('INSERT INTO users(users) VALUES($1) RETURNING *', params)
        console.log(data)
        res.status(201).json(data)
        
    } catch (error) {
        console.log(error)
    }
})

app.delete('/users/:id', async (req, res) => {
    let { id } = req.params

    let da = [id]
    try {
        let data = await query('DELETE FROM users WHERE id = $1 RETURNING *', da)
     
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

app.put('/users/:id',async (req, res) => {
    let { id } = req.params
    let data = await query('SELECT * FROM users WHERE id = $1', [id])
    let update = data.users = 'Baxa2910'
    let param = [update,id]
    let updateUser = await query('UPDATE users SET users = $1 WHERE id = $2 RETURNING *', param)
    console.log(updateUser)
})



const port = process.env.Port || 8080

app.listen(port, () => {
    console.log(`port is working ${port}`)
})