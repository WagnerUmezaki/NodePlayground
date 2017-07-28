const express = require('express')
const app = express()

const port = 8081

//middleware
app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err)
  }

  console.log("server is listening on " + port)
})

//middleware
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send("Something broke!")
})
