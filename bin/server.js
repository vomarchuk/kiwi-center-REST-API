const mongoose = require('mongoose')

const app = require('../app')
require('dotenv').config()

const { DB_HOST, PORT = 3030 } = process.env

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT)
    console.log(`Database connection successful on port ${PORT}`)
  })
  .catch(err => {
    console.log(err.message)
    process.exit(1)
  })
