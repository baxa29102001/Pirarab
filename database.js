const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'bohodir29102001<>',
    port: 5432,
    database:'twit'
})

const query = async (SQL,array) => {
    let client = await pool.connect()
    try {
        let data = await client.query(SQL,array?array:null)
        return data.rows
        
    } catch (error) {
        console.log(error)
    }
    
    await client.release()
}

const queryAll = async (SQL,array) => {
    let client = await pool.connect()
    try {
        let {rows:[row]} = await client.query(SQL, array ? array : null)
        
        return row
        
    } catch (error) {
        console.log(error)
    }
    
    await client.release()
}

// query()

module.exports = { query, queryAll}  