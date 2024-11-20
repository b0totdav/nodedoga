import express from 'express'
 
const router = express();

router.get('/greeting',(req,res)=>{
    res.send("Hello,  Dávid Tóth")
})

export {router as greetingRouter}