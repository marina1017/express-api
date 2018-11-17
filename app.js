var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

//routes ディレクトリの中にある Router オブジェクトのモジュールをそれぞれ読み込む
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var photosRouter = require('./routes/photos');

var app = express();
// app というオブジェクトの use 関数を使って helmet を使うように登録
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// / というパスにアクセスされた時は、routes/index.js で記述している Router オブジェクトを、
// /users というパスにアクセスされた時は、 routes/users.js で記述した Router オブジェクトを利用するように、記述しています。
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/photos', photosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //存在しないパスへのアクセスがあった際の処理
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  //Application オブジェクトに登録された env という値が development である場合つまり開発環境の場合は、
  //エラーのオブジェクトをテンプレートに渡し、そうではない本番環境におけるエラーの時は、スタックトレースを表示させるエラーオブジェクトはテンプレートに渡さない実装となっています。
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//ここまでに設定した Application オブジェクトを、モジュールとして設定する記述です。
module.exports = app;
