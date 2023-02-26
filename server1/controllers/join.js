const express = require('express')
const { query } = require('../db')

const router = express.Router()

router.get("/inner", async (req, res) => {
  try {
    // JOIN === INNER JOIN
    const qTxt = `
      SELECT e.name AS emp_name, d.name AS dept_name 
      FROM employees e 
      INNER JOIN departments d 
      ON e.dept_id = d.id
    `

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/left", async (req, res) => {
  try {
    const qTxt = `
      SELECT e.name AS emp_name, d.name AS dept_name 
      FROM employees e 
      LEFT JOIN departments d 
      ON e.dept_id = d.id
    `

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/right", async (req, res) => {
  try {
    const qTxt = `
      SELECT e.name AS emp_name, d.name AS dept_name 
      FROM employees e 
      RIGHT JOIN departments d 
      ON e.dept_id = d.id
    `

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/multiple", async (req, res) => {
  try {
    const qTxt = `
      SELECT e.name AS emp_name, d.name AS dept_name, 
      m.name AS manager_name, p.name AS project_name 
      FROM employees e 
      JOIN departments d ON e.dept_id = d.id
      JOIN managers m ON e.manager_id = m.id
      JOIN projects p ON e.project_id = p.id
    `

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/full", async (req, res) => {
  try {
    const qTxt = `
    SELECT e.name AS emp_name, d.name AS dept_name 
    FROM employees e 
    FULL JOIN departments d 
    ON e.dept_id = d.id
    `

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/cross", async (req, res) => {
  try {
    const qTxt = `
    SELECT e.name AS emp_name, d.name AS dept_name 
    FROM employees e 
    CROSS JOIN departments d 
    `

    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router