const router = require('express-promise-router')();
const bannerController = require('../controllers/banner.controller');

router.get('/banner', bannerController.getBanner);
router.put('/banner', bannerController.modifyBannerById);
router.post('/banner', bannerController.addBanner);

module.exports = router;