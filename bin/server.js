const mongoose = require('mongoose')

const app = require('../app')
require('dotenv').config()

const { DB_HOST } = process.env

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3030)
    console.log(`Database connection successful on port 3030`)
  })
  .catch(err => {
    console.log(err.message)
    process.exit(1)
  })
