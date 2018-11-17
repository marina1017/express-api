var express = require('express');

//Router オブジェクトを呼び出している
//Router を設定して、あとで登場する Application オブジェクトにセットすることによって、
//特定のパスへの HTTP へのアクセスを処理することができます。
var router = express.Router();

/* GET home page. */
// GET メソッドで / というルートのパスにアクセスがあった時に、
//  views/index.pug のテンプレートを利用して、 render 関数を呼び、
//   HTML 形式の文字列を作って、レスポンスとして返す、という処理となっています。
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Router オブジェクト自身を、モジュールとして提供する記述
module.exports = router;
