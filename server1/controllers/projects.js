const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// CREATE TABLE projects (
//   id BIGSERIAL NOT NULL PRIMARY KEY, 
//   name VARCHAR(50) NOT NULL, 
//   manager_id BIGINT NOT NULL REFERENCES managers(id)
// );

router.get("/", async (req, res) => {
  try {
    const qTxt = "SELECT * FROM projects"
    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const { name, manager_id } = req.body

  try {
    const qTxt = "INSERT INTO projects (name, manager_id) values ($1, $2) returning id"
    const { rows } = await query(qTxt, [name, manager_id])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router