const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const path = require("path")

app.get('/', (req, res) => {
    let html = fs.readFileSync("./index.html", 'utf8').toString("utf8")
    res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

