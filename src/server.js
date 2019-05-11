const Koa = require("koa");
const Router = require("koa-router");
const json = require("koa-json");

const app = new Koa();
const router = new Router();

const pg = require("./db");

router.get("/", (ctx, next) => {
  ctx.body = "Hello World";
});

router.get("/events", async (ctx, next) => {
  const events = await pg("events");
  ctx.body = events;
});

app
  .use(json({ pretty: process.env !== "production", param: "pretty" }))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
