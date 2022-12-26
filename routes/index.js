const express = require("express");
const router = express.Router();
const board = require("./board.route");

router.get("/", (req, res) => {
  res.render("index.html");
});
router.use("/board", board);

module.exports = router;
