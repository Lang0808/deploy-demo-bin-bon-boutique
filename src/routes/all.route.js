const router = require('express-promise-router')();
const allController = require('../controllers/all.controller');

router.get('/All/:page', allController.getAllProductPage);

module.exports = router;