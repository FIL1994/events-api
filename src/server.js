const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const pg = require("./db");

router.get("/", (ctx, next) => {
  ctx.body = "Hello World";
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
