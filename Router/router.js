const express = require("express");
const router = express();
const pokedexCont = require("../02-pokeDex/index.js");


// Testing Routes
router.get("/findNames", pokedexCont.findNames);
router.get("/findByResistance*", pokedexCont.findByResistance);
router.get("/findNamesByResistance*", pokedexCont.findNamesByResistance);
router.get("/countedWeaknesses", pokedexCont.countedWeaknesses);
router.get("/avgMaxCP", pokedexCont.avgMaxCP);


// GET Routes
// 404 PAGE
router.get("*", function(req, res) {
	res.status(404).send("page not found!");
});


module.exports = router;