const express = require('express');
const wishController = require('../controllers/mainsController');
const router = express.Router({ mergeParams: true });

router.get('/admin', wishController.getAdminPage);

router.post('/admin', wishController.postNewWish);

router.post('/delete', wishController.deleteWish);

module.exports = router;