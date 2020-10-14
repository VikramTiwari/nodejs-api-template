// the goal is to only require this file and be sure all the services started
const httpServer = require('../src/index')
// mock axios to make API calls
const axios = jest.requireActual(`axios`)

const { PORT = 8080 } = process.env

describe(`Services`, () => {
  beforeAll(done => {
    httpServer.once(`listening`, done)
    if (httpServer.listening) {
      done()
    }
  }, 10 * 1000)
  afterAll(done => {
    httpServer.close(() => {
      setTimeout(done, 100)
    })
  }, 10 * 1000)

  describe(`Web server started`, () => {
    test(
      `Web server started - status`,
      done => {
        axios.get(`http://localhost:${PORT}/?env=test`).then(res => {
          expect(res).toMatchSnapshot()
          done()
        })
      },
      10 * 1000,
    )
  })
})
