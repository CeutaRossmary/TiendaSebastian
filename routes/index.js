var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res){
  res.render('index', {title:'Tienda Sebastian '});
}) 

module.exports = router;
