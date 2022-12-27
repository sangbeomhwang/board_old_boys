const express = require('express');
const router = express.Router();
const controller = require("../controllers/join.controller");

router.get('/join', controller.getJoin);
router.post('/join', controller.postJoin);
router.get('/login', controller.getLogin);
router.post('/', controller.postLogin);
// router.get('/logout', controller.logout);

module.exports = router;

