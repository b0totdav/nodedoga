import express from 'express'
import { expressRouter } from './routes/express';
import { greetingRouter } from './routes/greeting';
import { nodejsRouter } from './routes/nodejs';

const app=express();
const PORT=3000;

app.use(expressRouter)
app.use(greetingRouter)
app.use(nodejsRouter)

app.get('/',(req,res)=>{
    res.sendFile("public/index.html")
})

app.listen(PORT,()=>{
    console.log("Hi there")
})