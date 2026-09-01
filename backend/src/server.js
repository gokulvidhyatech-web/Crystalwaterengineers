const pool = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;
const bcrypt = require("bcrypt");

pool.connect()
  .then(() => {
    console.log("✅ PostgreSQL Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Database Connection Failed");
    console.error(err.message);
  });

// All your routes here
app.get("/", (req, res) => {
  res.send("Backend Server is Running 🚀");
});

app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM gvtech");

    res.json(result.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Database Error");
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  console.log("==================================");
  console.log("Login Request Received");
  console.log("Username:", username);
  console.log("Password:", password);

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    console.log("Database Result:", result.rows);

    if (result.rows.length === 0) {
      console.log("❌ User not found");

      return res.status(401).json({
        success: false,
        message: "Invalid Username",
      });
    }

    const user = result.rows[0];

    console.log("User Found:", user);

    if (user.password !== password) {
      console.log("❌ Password Incorrect");

      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    console.log("✅ Login Successful");

    res.json({
      success: true,
      message: "Login Successful",
      user: {
        id: user.id,
        username: user.username,
      },
    });

  } catch (err) {
    console.error("Database Error:", err);

    res.status(500).json({
      success: false,
      message: "Database Error",
    });
  }
});

app.get("/gvtech", async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM gvtech ORDER BY id"
        );

        res.json(result.rows);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Database Error"
        });

    }

});

// Keep this LAST
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});