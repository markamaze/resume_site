const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT
// const port = 3000

app.use(express.static(path.join(__dirname + '/')))
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + "/")))

app.listen(port, () => console.log(`listening on port ${port}`))
