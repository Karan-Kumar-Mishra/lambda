const express = require('express')
const app = express()
const port = 80
const cors=require('cors')
app.use(cors())
app.use(express.json())

app.post('/new', (req, res) => {
   const domain=req.body.name;
   app.get(`/${domain}`,(rq,rs)=>{
     rs.send(`Hello Mr. ${domain}`)
   })
   res.send({
    website:`http://localhost/${domain}`
   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
