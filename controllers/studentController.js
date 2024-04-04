const { student: StudentModel } = require("../models/student");

const studentController = {
  loginStudent: async (req, res) => {
    try {
      console.log(req.body);
      const response = await StudentModel.find();

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
