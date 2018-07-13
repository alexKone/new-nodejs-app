var express = require('express');
var router = express.Router();

router.get('/:country', (req, res, next) => res.render('country'));

module.exports = router;