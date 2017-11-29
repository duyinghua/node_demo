var db = require('../../../config/DB')
var fw = require('../framework')
module.exports = {
    main(req, res){
        res.render('index', {title: 'myProjectA'});
    },
    aaa(req, res){
        db('select * from user where age>11', function (err, results, fields) {
            console.log(results)
            fw.send(res, results);
        });
    }
};
