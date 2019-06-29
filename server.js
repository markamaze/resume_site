const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname + '/dist/')))
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + "/dist/")))

app.listen(port, () => console.log(`listening on port ${port}`))
