var express = require('express');

//Router オブジェクトを呼び出している
//Router を設定して、あとで登場する Application オブジェクトにセットすることによって、
//特定のパスへの HTTP へのアクセスを処理することができます。
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
