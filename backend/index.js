require("dotenv").config();
const express = require("express");
const route = require("./router");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// router
app.use(process.env.API_URL, route);

app.get("/", function (req, res) {
  res.send("Hello World");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
