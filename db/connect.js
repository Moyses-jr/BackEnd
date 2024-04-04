const { connect, connection: db, model } = require("mongoose");

const uri = "mongodb://127.0.0.1:27017";

const ConnectDB = async () => {
  try {
    db.once("open", () => console.log("Estamos conectados no banco de dados!"));

    await connect(uri, { dbName: "dbStudants" });
  } catch (error) {
    console.log(`Não conectado ao BD! Erro ${error}`);
  }
};

module.exports = { ConnectDB };
