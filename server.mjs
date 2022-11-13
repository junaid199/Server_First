import express from 'express'
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello World! Drinks for U')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})