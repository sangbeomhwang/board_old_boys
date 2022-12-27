const express = require("express");
const router = express.Router();
const board = require("./board.route");
const join = require("./join.route");

router.get("/", (req, res) => {
  if (req.cookies.token) {
    console.log(3);
    res.render("index.html", { token: req.cookies.token });
  } else {
    console.log(2);
    res.render("index.html");
  }
});

router.use("/board", board);
router.use("/join", join);

module.exports = router;
