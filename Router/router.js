const express = require("express");
const router = express();
const pokedexCont = require("../Controller/index.js");


// Testing Routes
// router.get("/findNames", pokedexCont.findNames);
// router.get("/findByResistance*", pokedexCont.findByResistance);
// router.get("/findNamesByResistance*", pokedexCont.findNamesByResistance);
router.get("/weaknesses", pokedexCont.countedWeaknesses);
router.get("/avgMaxCP", pokedexCont.avgMaxCP);

router.get("/pokemon/names", pokedexCont.findNames);
router.get("/pokemon/:attackName", pokedexCont.findByResistance);
router.get("/pokemon/names/:attackName", pokedexCont.findNamesByResistance);


// GET Routes
// 404 PAGE
router.get("*", function(req, res) {
	res.status(404).send("This does not exist.");
});
router.post("*", function(req, res) {
	res.status(404).send("This does not exist.");
});
router.patch("*", function(req, res) {
	res.status(404).send("This does not exist.");
});
router.put("*", function(req, res) {
	res.status(404).send("This does not exist.");
});
router.delete("*", function(req, res) {
	res.status(404).send("This does not exist.");
});

module.exports = router;