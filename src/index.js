require('dotenv').config()

const app = require('./server')
const { PORT = 8080 } = process.env

// TODO: Connect with databases here

// start the app on default port
const httpServer = app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`)
})

httpServer.once(`close`, async () => {
  // TODO: disconnect databases or other things etc
})

module.exports = httpServer // for testing
