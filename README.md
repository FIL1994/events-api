# events-api

A REST API for events build with Koa, Knex and PostgreSQL

## Help

### Knex

> Migrations

```bash
knex migrate:rollback

knex migrate:make migration_name
knex migrate:latest
```

> Seeds

```bash
knex seed:make seeds_name
knex seed:run
```

### Docker

```bash
# see tables
docker exec -it my_postgres psql -U postgres
\dt
```
