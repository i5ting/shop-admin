// var $middlewares  = require('mount-middlewares')(__dirname);
var router = koa_router()

router.get('/', $middlewares.request_logger2, (ctx, next) => {
  console.log("../")
  return ctx.render('index', { 
    title: '欢迎使用StuQ商城' 
  });
})

module.exports = router;
