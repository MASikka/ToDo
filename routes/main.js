const express = require('express');
const wishController = require('../controllers/mainsController');
const router = express.Router({ mergeParams: true });

router.get('/', wishController.getMainPage);

//router.post('/', wishController.postNewTask);

//router.post('/delete', wishController.deleteTask);

module.exports = router;