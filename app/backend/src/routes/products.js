const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/', (req, res) => {
  res.json({ total: products.length, items: products });
});

module.exports = router;
