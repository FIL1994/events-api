const HttpStatus = require("http-status-codes");
const Router = require("koa-router");
const router = new Router();

const pg = require("../db");

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

router.delete("/events/:id", async ctx => {
  try {
    const success = await pg("events")
      .where({ id: ctx.params.id })
      .delete();

    if (success) {
      ctx.body = { message: "success" };
    } else {
      // resource was already deleted
      ctx.status = HttpStatus.NO_CONTENT;
    }
  } catch (error) {
    ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR, error);
  }
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

module.exports = router;
