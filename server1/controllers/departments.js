const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// CREATE TABLE departments (
//   id BIGSERIAL NOT NULL PRIMARY KEY, 
//   name VARCHAR(50) NOT NULL
// );

router.get("/", async (req, res) => {
  try {
    const qTxt = "SELECT * FROM departments"

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const { name } = req.body

  try {
    const qTxt = "INSERT INTO departments (name) values ($1) returning id"
    const { rows } = await query(qTxt, [name])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router