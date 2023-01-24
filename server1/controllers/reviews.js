const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// CREATE TABLE reviews (
//   id BIGSERIAL NOT NULL PRIMARY KEY, 
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

module.exports = router