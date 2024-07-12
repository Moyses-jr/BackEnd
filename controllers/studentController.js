const { createStudent, getStudentByEmail } = require("../models/login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "freeWayForFly";

async function createStudentController(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Todos o campos são obrigatorios");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await createStudent({ name, email, password: hashedPassword });

    res.status(200).send("Estudante cadastrado com sucesso");
  } catch (error) {
    console.error(error);
    res.status(500).send("Um erro ocorreu durante o cadastro!");
  }
}

async function loginStudentController(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email e a senha são obrigatorios");
  }

  try {
    const student = await getStudentByEmail(email);
    if (!student) {
      return res.status(401).send("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign(
      { id: student.id, email: student.email },
      accessTokenSecret,
      {
        expiresIn: "5m",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in");
  }
}

module.exports = {
  createStudentController,
  loginStudentController,
};
