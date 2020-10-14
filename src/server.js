const express = require(`express`)
const cors = require('cors')

const app = express()

// TODO: add middlewares
app.use(
  cors({
    // set origin to true to reflect the request origin, as defined by req.header('Origin')
    // this will allow all cross origin requests
    origin: true,
  }),
)

// for health checks
app.get(`/`, (req, res) => {
  res.json(req.query)
})

module.exports = app // for testing
