const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const HttpStatus = require("http-status-codes");

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

router.get("/events/:id", async (ctx, next) => {
  const event = await pg("events")
    .where({ id: ctx.params.id })
    .first();

  if (!event) {
    ctx.throw(HttpStatus.NOT_FOUND);
  }

  ctx.body = event;
});

router.post("/events", async (ctx, next) => {
  const newEvent = ctx.request.body;

  if (!newEvent.hasOwnProperty("title")) {
    ctx.throw(400, "title is required");
  }

  try {
    const event = await pg("events")
      .insert(newEvent)
      .returning("*");

    ctx.body = event;
  } catch (err) {
    ctx.throw(HttpStatus.BAD_REQUEST, err);
  }
});

app
  .use(bodyParser())
  .use(json({ pretty: process.env !== "production", param: "pretty" }))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
