const express = require("express");
const router = express.Router();
const board = require("./board.route");
const join = require("./join.route");

router.get("/", (req, res) => {
  const { token }= req.cookies;
  res.render("index.html", { token });
});
router.use("/board", board);
router.use("/join", join);

module.exports = router;
