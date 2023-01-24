const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// CREATE TABLE reviews (
//   id BIGSERIAL NOT NULL PRIMARY KEY, 
//   restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
//   name VARCHAR(50) NOT NULL, 
//   body TEXT NOT NULL, 
//   rating INT check(rating >=1 and rating <=5)
// );

router.get("/", async (req, res) => {
  try {
    const qTxt = "SELECT * FROM reviews"
    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const { restaurant_id, name, body, rating } = req.body

  try {
    const qTxt = "INSERT INTO reviews (restaurant_id, name, body, rating) values ($1, $2, $3, $4) returning id"
    const { rows } = await query(qTxt, [restaurant_id, name, body, rating])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router