const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
require('./db')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const restaurants = require('./controllers/restaurants')

app.use("/restaurants", restaurants)

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message || "Internal Server Error"
    }
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App is running on ${port}`))