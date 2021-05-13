const express = require("express");
const app = express();

const port = 5000;

app.use("/", (req, res) => res.send("hello world"));

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
