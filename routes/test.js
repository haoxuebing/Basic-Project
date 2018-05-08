var express = require('express');
var router = express.Router();
var service = require('../modules/test');
var helper = require('../modules/commen/route_helper');

router.basePath = '/test/';
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})


/* GET home page. */
helper(router, service);

module.exports = router;