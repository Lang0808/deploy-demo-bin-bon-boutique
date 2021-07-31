const router = require('express-promise-router')();
const urlController = require('../controllers/url.controller');

router.get('/url/:id', urlController.getUrlById);

module.exports = router;