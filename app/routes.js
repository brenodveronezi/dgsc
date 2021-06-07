const express = require("express"),
  router = express.Router();

//GET home page.
router.get("/", function(req, res) {
  res.render("index", { title: "DGSC - Home" });
});

router.get("/cadastro", function(req, res) {
  res.render("cadastro", { title: "DGSC - Cadastrar Autuado" });
});

module.exports = router;
