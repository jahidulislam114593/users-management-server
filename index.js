const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Jahidul Islam", email: "jahid@gmail.com" },
  { id: 2, name: "Tanvir", email: "tanvir@gmail.com" },
  { id: 3, name: "Labib", email: "labib@gmail.com" },
  { id: 4, name: "Maly", email: "maly@gmail.com" },
  { id: 5, name: "nahid", email: "nahid@gmail.com" },
  { id: 6, name: "jim", email: "jim@gmail.com" },
  { id: 7, name: "rafe", email: "rafe@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("This is User Management Server By Jahidul islam ");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post Api is Hitting");
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
