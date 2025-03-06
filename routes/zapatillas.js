var express = require('express');
var router = express.Router();
const zapatillasController = require("../controllers/zapatillasController");


/* GET home page. */
router.get('/', zapatillasController.index) 

module.exports = router;
