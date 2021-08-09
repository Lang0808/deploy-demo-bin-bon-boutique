const router = require('express-promise-router')();
const filterController = require('../controllers/filter.controller');

router.get('/filter/:gender/:agestart/:ageend/:newClothes/:discounting', filterController.processFilter);
router.post('/filter/HandleLocationSearch/:lastId', filterController.HandleLocationSearch);

module.exports = router;