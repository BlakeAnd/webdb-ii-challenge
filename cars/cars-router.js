const express = require("express");

db = require("../data/db-config.js");

const router = express.Router();

router.post("/", (req, res) => {
  const entry = req.body;
  db('cars')
  .insert(entry, 'id')
  .then(car => {
    res.status(200).json(car);
  })
  .catch(err => {
    res.status(500).json(err);
  })
})
router.get("/", (req, res) => {
  db('cars')
  .select()
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(err => {
    res.status(500).json({err: err.message});
  })
})

module.exports = router;
