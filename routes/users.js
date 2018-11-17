var express = require('express');
var router = express.Router();

/* GET users listing. */
// send 関数は、文字列が渡されると、自動的にその内容をレスポンスのボディの値としてくれます。
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
