const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// CREATE TABLE managers (
//   id BIGSERIAL NOT NULL PRIMARY KEY, 
//   name VARCHAR(50) NOT NULL, 
//   dept_id BIGINT NOT NULL REFERENCES departments(id)
// );

router.get("/", async (req, res) => {
  try {
    const qTxt = "SELECT * FROM managers"
    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const { name, dept_id } = req.body

  try {
    const qTxt = "INSERT INTO managers (name, dept_id) values ($1, $2) returning id"
    const { rows } = await query(qTxt, [name, dept_id])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router