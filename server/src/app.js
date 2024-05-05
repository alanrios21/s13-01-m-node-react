const express = require("express");
const connectMongoDBSession = require("connect-mongodb-session");
const session = require("express-session");
const morgan = require("morgan");
const routes = require("../src/routes/index");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./utils/swagger/swagger");

const MongoDBStore = connectMongoDBSession(session);

const server = express();

const whitelist = process.env.WHITELIST ? process.env.WHITELIST.split(",") : [];

server.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);
server.name = "RoundPeople API";

// Configurar Swagger UI
server.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
server.use(express.json());
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000,
    },
    store: new MongoDBStore({
      collection: "Session",
      uri: process.env.DATABASE_URL,
    }),
  })
);

server.use(morgan("dev"));

server.use("/", routes);

module.exports = server;
