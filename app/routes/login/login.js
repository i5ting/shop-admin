var router = koa_router()

/* GET users listing. */
router.get('/', function(ctx, next) {
  return ctx.render('login/login', {
    title: '登录'
  });
});

module.exports = router;

