const express = require("express");
const description = require("./routes/description.js");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! I am a product description generator app using Cohere AI.");
});

app.use("/description", description);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
