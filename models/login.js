const { model, Schema } = require("mongoose");

const loginSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const loginModel = model("loginModel", loginSchema);

module.exports = { loginModel, loginSchema };
