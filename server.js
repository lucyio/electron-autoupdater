const http = require('http')
const hazel = require('hazel-server')

require('dotenv').config()
console.log(process.env)
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  hazel({
    account: process.env.ACCOUNT,
    repository: process.env.REPOSITORY
  })
}).listen(PORT, () => {
  console.log(`Electron autoupdater booted on localhost:${PORT}`)
})
