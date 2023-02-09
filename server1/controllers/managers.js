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

module.exports = router