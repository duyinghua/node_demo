module.exports = {
    main(req, res){
        res.render('index', {title: 'myExpress'});
    },
    users(req, res){
        let json = {
            a: 1,
            b: 'test',
            c: [1, 2, 3],
            d: {test: 0}
        }
        res.send(json);
    }
};
