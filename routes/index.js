var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('pages/index'));
router.get('/about', (req, res, next) => res.render('pages/about'));
router.get('/login', (req, res, next) => res.render('pages/login'));

module.exports = router;
