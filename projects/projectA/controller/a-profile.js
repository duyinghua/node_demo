var db = require('../../../config/DB')
module.exports = {
    main(req, res){
        res.render('index', {title: 'myProjectA'});
    },
    aaa(req, res){
        db('select * from user where age>11', function (err, results, fields) {
            console.log(results)
            res.send(results);
        });
    }
};
