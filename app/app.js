"use strict"

const fs = require("fs")

var dir = "./logs"
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}

const Log = require("log")
const log = new Log("debug", fs.createWriteStream("./logs/server.log"))

const express = require("express")
const app = express()

const port = 3000

//middleware
app.use((request, response, next) => {
  log.info("%s", request)
  next()
})

app.get("/", (request, response) => {
  response.send("Hello World")
})

app.listen(port, (err) => {
  if (err) {
	log.error("something bad happened %s", err)
    return 
  }
  log.info("server is listening on port %s", port)
})

//middleware
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  log.error(err)
  response.status(500).send("Something broke!")
  next()
})
