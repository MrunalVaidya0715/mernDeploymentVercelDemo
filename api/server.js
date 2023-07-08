import express from 'express'
import testRoute from './routes/route.js'
const app = express();

app.use('/',(req, res)=>{
    res.status(200).send("Welcome")
})
app.use('/sec',(req, res)=>{
    res.status(200).send("Welcome Second")
})

app.use('/api/test/',(req, res)=>{
    res.status(200).send("Hello")
})

app.use('/api/test2/',testRoute)

app.listen(8800,()=>{
    console.log('Server Running ')
})