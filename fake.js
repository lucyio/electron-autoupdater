// For experimental use only
const express =require('express')

const app = express()

app.get('*', (req, res) => {
  res.json({
    "url": "http://localhost:3000/public/mac.zip",
    "name": "My Release Name",
    "notes": "Theses are some release notes innit",
    "pub_date": "2013-09-18T12:29:53+01:00"
  })
})
app.use(express.static('public'))


app.listen(3000, () => {
  console.log('fake server on 3000')
})