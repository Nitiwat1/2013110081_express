var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userControllers')

/* GET users listing. */
router.get('/', userControllers.index )

router.get('/bio',userControllers.bio )

module.exports = router;
