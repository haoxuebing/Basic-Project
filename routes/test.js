var express = require('express');
var router = express.Router();
var service = require('../modules/test');
var helper=require('../modules/commen/route_helper');

router.basePath='/test/';
/* GET home page. */
helper(router,service);

module.exports = router;