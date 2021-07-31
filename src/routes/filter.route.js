const router = require('express-promise-router')();
const filterController = require('../controllers/filter.controller');

router.get('/filter/:gender/:agestart/:ageend/:new/:discounting', filterController.processFilter);

module.exports = router;