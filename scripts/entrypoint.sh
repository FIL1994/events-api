#!/bin/bash

npm i -g knex
knex migrate:latest

npm run start