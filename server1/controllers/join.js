const express = require('express')
const { query } = require('../db')

const router = express.Router()

router.get("/inner", async (req, res) => {
  try {
    // JOIN === INNER JOIN
    const qTxt = "SELECT e.name AS emp_name, d.name AS dept_name FROM employees e INNER JOIN departments d ON e.dept_id = d.id"

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/left", async (req, res) => {
  try {
    const qTxt = "SELECT e.name AS emp_name, d.name AS dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id"

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/right", async (req, res) => {
  try {
    const qTxt = "SELECT e.name AS emp_name, d.name AS dept_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id"

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router