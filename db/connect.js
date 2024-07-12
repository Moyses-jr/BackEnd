const mysql = require("mysql2/promise");

async function ConnectDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: process.env.ACCESS_DATABASE,
      database: "transport",
    });

    console.log("Connected to the database");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = { ConnectDB };
