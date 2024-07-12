const { ConnectDB } = require("../db/connect");

//TODO: Verificar por que é necessário abri e fechar a connection
async function createStudent({ name, email, password }) {
  const connection = await ConnectDB();
  const query = `
    INSERT INTO studants (name, email, password)
    VALUES (?, ?, ?)
  `;
  const [result] = await connection.execute(query, [name, email, password]);
  await connection.end();
  return result;
}

async function getStudentByEmail(email) {
  const connection = await ConnectDB();
  const query = `
    SELECT * 
      FROM studants 
     WHERE email = ? 
  `;
  const [rows] = await connection.execute(query, [email]);
  await connection.end();
  return rows[0];
}

module.exports = {
  createStudent,
  getStudentByEmail,
};
