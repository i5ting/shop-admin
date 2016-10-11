// var $middlewares  = require('mount-middlewares')(__dirname);
var router = koa_router()

var simditor_qn_config = require('../../config/simditor_qn')

router.get('/new', $middlewares.request_logger2, (ctx, next) => {
  var qn = require('qn');

  var client = qn.create(simditor_qn_config.qn);
  
  var token = client.uploadToken();
  console.log(token)
  
  console.log("../")
  return ctx.render('products/new', { 
    title: '欢迎使用StuQ商城',
    token: token
  });
})


router.get('/', $middlewares.request_logger2, (ctx, next) => {
  console.log("../")
  return ctx.render('products/list', { 
    title: '欢迎使用StuQ商城' 
  });
})

module.exports = router;
