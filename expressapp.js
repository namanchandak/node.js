
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('about page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})