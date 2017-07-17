'use strict';

const express = require('express');
const router = express.Router();

router.get('/officer-related-shootings', (req, res) => {
  res.send('police data');
});

module.exports = router;
