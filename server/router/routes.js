const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.route("/").post(controllers.contactForm);

module.exports = router;
