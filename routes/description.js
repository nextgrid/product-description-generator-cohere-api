const express = require("express");
const router = express.Router();
const generator = require("../lib/description-generator");

router.post("/", async (req, res) => {
  const { product, keywords } = req.body;
  const description = await generator({ product, keywords });
  res.send(description.slice(0, -3));
});

//export this router to use in our index.js
module.exports = router;
