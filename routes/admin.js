const express = require('express');
const multer = require('multer');
const wishController = require('../controllers/mainsController');
const path = require('path');
const router = express.Router({ mergeParams: true });



let upload = multer({
    storage: multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null, './images');
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })
});




router.get('/admin', wishController.getAdminPage);

router.post('/admin',upload.single('userFile'), wishController.postNewWish);

router.post('/delete', wishController.deleteWish);

module.exports = router;