const express = require('express')
const { query } = require('../db')

const router = express.Router()

// table creations
// const qTxt = "CREATE TABLE restaurants (id BIGSERIAL NOT NULL, name VARCHAR(50) NOT NULL, location VARCHAR(50) NOT NULL, price INT NOT NULL);"

router.get("/", async (req, res) => {
  try {
    const qTxt = "SELECT * FROM restaurants"
    const { rows } = await query(qTxt)
    res.send(rows)

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const qTxt = "SELECT * FROM restaurants WHERE id = $1"
    const { rows } = await query(qTxt, [id])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const { name, location, price } = req.body

  try {
    const qTxt = "INSERT INTO restaurants (name, location, price) values ($1, $2, $3) returning id" // returning * (return new data)
    const { rows } = await query(qTxt, [name, location, price])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.put("/", async (req, res) => {
  const { id, name, location, price } = req.body

  try {
    const qTxt = "UPDATE restaurants SET name = $2, location = $3, price = $4 WHERE id = $1 returning *"
    const { rows } = await query(qTxt, [id, name, location, price])
    res.send(rows[0])

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const qTxt = "DELETE FROM restaurants WHERE id = $1"
    await query(qTxt, [id])
    res.send("Deleted successfully")

  } catch (err) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router