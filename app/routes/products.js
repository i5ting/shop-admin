// var $middlewares  = require('mount-middlewares')(__dirname);
var router = koa_router()

router.get('/new', $middlewares.request_logger2, (ctx, next) => {
  console.log("../")
  return ctx.render('products/new', { 
    title: '欢迎使用StuQ商城' 
  });
})


router.get('/', $middlewares.request_logger2, (ctx, next) => {
  console.log("../")
  return ctx.render('products/list', { 
    title: '欢迎使用StuQ商城' 
  });
})

module.exports = router;
