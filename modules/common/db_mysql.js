var mysql = require('mysql');
var config = require('config');
var logs = require('./logger');


var pools;

//使用数据库连接池  回调函数
function mysqlPools(...args) {
    if (pools == null) {
        pools = mysql.createPool(config.db_config);
    }

    var data = args[1] || [];
    logs.info('Print SQL:' + args[0] + JSON.stringify(data));

    return new Promise((resolve, reject) => {
        pools.query(args[0], data, function (error, results, fields) {
            logs.info('The solution is: ' + JSON.stringify(results));
            if (error) reject(error)
            resolve(results)
        });

    })
}


exports.query = mysqlPools;