import express from 'express'
import { expressRouter } from './routes/express.js'
import { greetingRouter } from './routes/greeting.js'
import { nodejsRouter } from './routes/nodejs.js'
import __dirname from './util/rootpath.js'
import path from 'path'

const app=express();
const PORT=3000;

app.use(expressRouter)
app.use(greetingRouter)
app.use(nodejsRouter)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public' ,'index.html'))
})

app.listen(PORT,()=>{
    console.log(`app is running on port http://localhost:${PORT}`)
    console.log("Hi there")
})