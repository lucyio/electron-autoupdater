const http = require('http')
const hazel = require('hazel-server')

require('dotenv').config()
const PORT = process.env.PORT || 3000

const server = hazel({
  account: process.env.ACCOUNT,
  repository: process.env.REPOSITORY
})

http
  .createServer((req, res) => server(req, res) )
  .listen(PORT, () => {
    console.log(`Electron autoupdater booted on localhost:${PORT}`)
  })
