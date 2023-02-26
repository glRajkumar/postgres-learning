const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// CREATE TABLE families (
//   id BIGSERIAL NOT NULL PRIMARY KEY, 
//   name VARCHAR(50) NOT NULL, 
//   parent_id BIGSERIAL
// );

router.get("/", async (req, res) => {
  try {
    const qTxt = "SELECT * FROM families"
    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const { name, parent_id } = req.body

  try {
    const qTxt = "INSERT INTO families (name, parent_id) values ($1, $2) returning id"
    const { rows } = await query(qTxt, [name, parent_id])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router