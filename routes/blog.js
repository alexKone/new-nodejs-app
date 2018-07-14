var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => res.render('blog/index'));
router.get('/:slug', (req, res, next) => res.render('blog/detail'));

module.exports = router;
