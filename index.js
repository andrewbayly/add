console.log("Hello World")

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/add/:a/:b', (req, res) => {
  const a = (req.params.a - 0)
  const b = (req.params.b - 0)
  
  const result = a + b
  
  res.send(`${result}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})