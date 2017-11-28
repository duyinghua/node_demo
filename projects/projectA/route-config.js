var express = require('express');
var router = express.Router();

var profileControllers = require('./controller/a-profile');

router.get('/', profileControllers.main);
router.get('/aaa', profileControllers.aaa);

module.exports = router;