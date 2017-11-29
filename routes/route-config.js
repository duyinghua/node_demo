var express = require('express');
var router = express.Router();

var profileControllers = require('./profile');

router.get('/', profileControllers.main);
router.get('/users', profileControllers.users);

module.exports = function (app) {
    /* app.use(function (req, res, next) {
     //todo 拦截器，如登录拦截权限拦截
     next();
     })*/
    app.use('/', router);
};