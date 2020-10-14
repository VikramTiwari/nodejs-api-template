const express = require(`express`)
// use cors to ensure that others can connect to your API
const cors = require('cors')

// instantiate express to get app which we will use going forward
const app = express()

// middlewares
app.use(
  cors({
    // set origin to true to reflect the request origin, as defined by req.header('Origin')
    // this will allow all cross origin requests
    origin: true,
  }),
)

// initial endpoint, can be used for health checks
app.get(`/`, (req, res) => {
  res.json(req.query)
})

module.exports = app // for testing
