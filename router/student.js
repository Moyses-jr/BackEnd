const studentRouter = require("express").Router();

const {
  createStudentController,
  loginStudentController,
} = require("../controllers/studentController");

studentRouter.post("/login", loginStudentController);

studentRouter.post("/cadastro", createStudentController);

module.exports = { studentRouter };
