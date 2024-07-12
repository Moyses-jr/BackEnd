require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//DB
const { ConnectDB } = require("../db/connect");
ConnectDB();

const routes = require("../router/routes");

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
