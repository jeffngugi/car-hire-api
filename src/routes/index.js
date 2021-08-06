const e = require('express')
const express = require('express')

const router = express.Router()

module.exports = ()=>{
    router.get('/', (req,res)=>{
        res.send('Home page')
    })

    return router;
}