const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((error) => console.log(error));

const storage = multer.diskStorage({
  destination: (req, imageFile, callback) => {
    callback(null, "images");
  },
  filename: (req, imageFile, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen("8000", () => {
  console.log("backend is running");
});
