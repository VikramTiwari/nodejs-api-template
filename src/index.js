require('dotenv').config()

const app = require('./server')
// if port is not exposed by env, then we start on 8080 by default
const { PORT = 8080 } = process.env

// TODO: Connect with databases here

// start the server on specified port
const httpServer = app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`)
})

// handle server close to perform resource cleanup
httpServer.once(`close`, async () => {
  // TODO: disconnect databases
})

module.exports = httpServer // for testing
