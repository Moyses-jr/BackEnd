const { student: StudentModel } = require("../models/student");

const studentController = {
  loginStudent: async (req, res) => {
    try {
      const data = {
        "login.email": req.body.email,
        "login.password": req.body.password,
      };

      console.log(data);
      const response = await StudentModel.findOne(data);

      res.status(201).json(response);
    } catch (error) {
      console.log(`Não foi possível encontrar o usuário. Erro: ${error}`);
    }
  },

  createStudent: async (req, res) => {
    try {
      const response = await StudentModel.create(req.body);

      res.status(201).json(response);
    } catch (error) {
      console.log(`Não foi possível criar um novo usuário. Erro: ${error}`);
    }
  },
};

module.exports = { studentController };
