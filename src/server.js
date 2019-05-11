const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
const eventsRouter = require("./routes/events");

router.get("/", (ctx, next) => {
  ctx.body = "Events API";
});

app
  .use(cors())
  .use(bodyParser())
  .use(json({ pretty: process.env !== "production", param: "pretty" }))
  .use(router.routes())
  .use(eventsRouter.routes())
  .use(router.allowedMethods())
  .listen(3000);
