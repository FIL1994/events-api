const Koa = require("koa");
const app = new Koa();
const pg = require("./db");

app.use(async ctx => {
  ctx.body = "Hello World";
});

app.listen(3000);
