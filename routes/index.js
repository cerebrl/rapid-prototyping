var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	var modalType = req.query.modalType;
	res.render('index', {title: 'Express', modalType: modalType});
});

module.exports = router;
