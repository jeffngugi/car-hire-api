import express from 'express'
import adminRoute from './admin'
import ownerRoute from './owner'
import customerRoute from './customer'

const app = express()
app.get('/healthcheck', (req,res) => res.sendStatus(200))

app.use('/admin', adminRoute)
app.use('/owner', ownerRoute)
app.use('/customer', customerRoute)


export default app