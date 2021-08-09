const router = require('express-promise-router')();
const allController = require('../controllers/all.controller');

router.get('/All/:lastId', allController.getAllProductPage);

module.exports = router;