var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let y = req.query.y;
    let rand = Math.random().toFixed(2);
    let imul = Math.imul(rand).toFixed(2);
    let log = Math.log(rand).toFixed(2);
    let log10 = Math.log10(rand).toFixed(2);
    if(y === undefined){
        y = rand;
    }
    res.render('computation', {
        imul: `Math.imul() applied to ${y} is  ${imul}`,
        log: `Math.imul() applied to ${y} is  ${log}`,
        log10: `Math.imul() applied to ${y} is  ${log10}`
    });
});

module.exports = router;