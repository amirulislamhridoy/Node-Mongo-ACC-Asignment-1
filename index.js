const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
const personRouter = require('./rotuer/v1/person.router')

// middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1', personRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("*", async (req, res) => {
    res.sendFile(__dirname + '/views/notfound.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})