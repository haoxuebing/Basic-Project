var mysql = require('../db_mysql');
var logs = require('../logs');


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

module.exports = {
    get_test,
    post_test_by_id
}


