var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/country/index')
})
router.get('/:country', (req, res, next) => {
  res.render('pages/country/details', { country: req.params.country})
});

module.exports = router;