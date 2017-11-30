var db = require('../../../config/DB')
var fw = require('../framework')
module.exports = {
    main(req, res){
        res.render('index', {title: 'myProjectA'});
    },
    async aaa(req, res){
        let results = await db('select * from user where age>12');
        let result2 = await db('select * from user where id=1');
        fw.send(res, results.concat(result2));
    }
};
