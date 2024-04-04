const express = require("express");
const port = 8080;
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

//DB
const { ConnectDB } = require("../db/connect");
ConnectDB();

const routes = require("../router/routes");

app.use("/api", routes);

app.listen(port, () => {});
