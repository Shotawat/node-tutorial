const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/Sho', (req, res) => res.send('Hello Sho in the World of Node-js and Docker!!!!'))

app.listen(8080, () => console.log('Example app listening on port 8080!'))