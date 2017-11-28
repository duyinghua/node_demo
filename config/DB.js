/**
 * 数据库配置
 * @type {Function}
 */
var mysql = require("mysql");

module.exports = function (sql, options, callback) {
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'my_user',
        port: 3306
    });
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, options, function (err, results, fields) {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err, results, fields);
            });
        }
    });
};