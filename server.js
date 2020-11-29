const express = require('express')
const app = express()
const { query, queryAll } = require('./database')
app.use(express.json())
const getIpAdress = require('./lib/getIpAdress')
const { getUsers, getUserOne,updateUsers,delUser } = require('./routes/users')
const { postOne , getPosts} = require('./routes/posts')
const {getComments} = require('./routes/comments')


// ############## MIDDLEWARES ################











//  #################   ROUTES  ########################
app.get('/user', getUsers)
app.post('/users', postOne)
app.get('/posts', getPosts)
app.get('/comments', getComments)
app.put('/users/:id',updateUsers)

app.delete('/users/:id', delUser)







const port = process.env.Port || 8080

app.listen(port, () => {
    console.log(`port is working ${port}`)
})