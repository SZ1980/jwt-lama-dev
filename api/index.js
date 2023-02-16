const express = require("express");
const app = express();
app.use(express.json());

const users = [
  {
    id: "1",
    username: "john",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "Jane0908",
    isAdmin: false,
  },
];

app.post("/api/login", (req, res) => {
  // const { username, password } = req.body;
  res.send("Hey it is working");
});

app.listen(5000, () => {
  console.log("Backend server is running on port 5000");
});
