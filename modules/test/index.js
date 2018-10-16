var mysql = require('../common/db_mysql');
var mongoose=require('../db_mongo');
var logs = require('../common/logger');


async function get_test(req, res) {
    var sql = 'select * from test1';
    var rlt = await mysql.query(sql);
    logs.info(JSON.stringify(rlt));
    res.send(JSON.stringify(rlt));
}

async function post_test_by_id(req, res){
    var sql = 'select * from test1 where id =?';
    var rlt = await mysql.query(sql,1);
    logs.info(JSON.stringify(rlt));
    res.send(JSON.stringify(rlt));
}

async function api_test(req,res){
    res.send('hello wolrd');

}

module.exports = {
    get_test,
    post_test_by_id,
    api_test
}


