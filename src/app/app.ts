import express, { Request, Response } from "express"
const app = express() 

// parser
app.use(express.json())

app.get('/', async(req:Request, res:Response) => {
  res.send('Hello World Now 5!')
})

app.post("/",async(req:Request,res:Response)=>{

    console.log("data")

    res.send(req.body)

})



export default app