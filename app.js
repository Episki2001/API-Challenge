const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const app = express();

const PORT = 8000;
app.use(express.static(__dirname + "/"));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}));

const router = require("./Router/router.js");
app.use("/api", router);

app.listen(PORT, () => console.log("listening at " + PORT));