const { model, Schema } = require("mongoose");
const { loginSchema } = require("./login");

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    login: {
      type: loginSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const student = model("student", studentSchema);

module.exports = { student };
