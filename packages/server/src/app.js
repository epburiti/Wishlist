"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

class Server {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new Server().server;
