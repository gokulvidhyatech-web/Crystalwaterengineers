const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Gv_application",
  password: "Gokul@1512#",
  port: 5432,
});

module.exports = pool;