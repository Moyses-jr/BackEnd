const studentRouter = require("express").Router();

const { studentController } = require("../controllers/studentController");

studentRouter.get("/loginStudent", studentController.loginStudent);

studentRouter.post("/createStudent", studentController.createStudent);

module.exports = { studentRouter };
