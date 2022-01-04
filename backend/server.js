const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected to MOngo"))
  .catch((error) => console.log(error));

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);

app.listen("8000", () => {
  console.log("backend is running");
});
