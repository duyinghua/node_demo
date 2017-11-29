module.exports = {
    send(res, result, code){
        let reason = '';
        code = code || 0;
        switch (code) {
            case 10000:
                reason = '未登录';
                break;
        }
        res.send({
            result: result,
            status: {
                status_code: code,
                status_reason: reason
            }
        })
    }
}