const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const categoryRouter = require('./routes/api/category')
const reviewsRouter = require('./routes/api/reviews')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/category', categoryRouter)
app.use('/api/reviews', reviewsRouter)
app.use('/', (req, res) => {
  res.status(200).json({ message: 'OK testing' })
})

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
