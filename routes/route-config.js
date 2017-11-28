var express = require('express');
var router = express.Router();

var profileControllers = require('./profile');

router.get('/', profileControllers.main);
router.get('/users', profileControllers.users);

module.exports = router;