const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");

const server = express();

//* Routes
const adminRoutes = require("./routes/admins");
const authRoute = require("./auth/authRoute");

server.use(cors());
server.use(helmet());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/admins", adminRoutes);
server.use("/api/auth", authRoute);

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

server.use("/docs", express.static("./docs"));

server.use(express.static(path.join(__dirname, "public")));

module.exports = server;
