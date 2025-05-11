const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://mongo:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: String,
}));

app.use(cors());
app.use(express.json());

app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.send({ message: "User saved!" });
});

app.listen(3000, () => console.log("Backend listening on port 3000"));
