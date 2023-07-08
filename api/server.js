import express from 'express'
import testRoute from './routes/test.js'
const app = express();

app.use('/api/test/',(req, res)=>{
    res.status(200).send("Hello")
})

app.use('/api/test2/',testRoute)

app.listen(8800,()=>{
    console.log('Server Running ')
})