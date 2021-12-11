const date = require('../getDate.js');
const mongoose = require('mongoose');


const WishFromMongo = mongoose.model('Wish');

exports.getMainPage = (req, res) => {
    
        let today = date.getTodayDateShort();
         WishFromMongo.find((error, wishes)=>{
            if(!error){
                
                res.render('index.ejs', {date: today, myWishes: wishes});
            }else{
                console.log(error);
            }
        });
};
exports.getAdminPage = (req, res) => {
    
    let today = date.getTodayDateShort();
     WishFromMongo.find((error, wishes)=>{
        if(!error){
            
            res.render('admin.ejs', {date: today, myWishes: wishes});
        }else{
            console.log(error);
        }
    });
    


};
exports.getRandomPage = (req,res)=>{
    let today = date.getTodayDateShort();
    WishFromMongo.find((error, wishes)=>{
        let random = getNumber(0,wishes.length);
        if(!error){
            
            res.render('random.ejs', {date: today, myWish: wishes[random]});
        }else{
            console.log(error);
        }
    });
};

exports.postNewWish =  (req, res) => {
    const userWish = req.body.newWish;
    const userDate = date.getTodayDateShort();
    const userImage = req.file.filename;
    
    let newWish = new WishFromMongo();
    newWish.description = userWish;
    newWish.date = userDate;
    newWish.image = userImage;

    newWish.save((error, response)=>{
        if(!error){
            console.log(response);
            res.redirect('/admin'); 
        }else{
            console.log(error);
        }
    });

    
};

exports.deleteWish =  (req, res) => {
    var fs = require('fs');
    const checkedItemId = req.body.checkbox;
    const imageName = req.body.imgName;
    let filePath = `./images/${imageName}`;
    fs.unlinkSync(filePath);
     WishFromMongo.findByIdAndRemove(checkedItemId, (error)=>{
        if(!error){
            res.redirect('/admin');
        }else{
            console.log("Failed to delete");
        }
    });
    

};

function getNumber(min, max) {  
    let random;
    do {
        random = Math.floor(Math.random() * (max - min)) + min;
    } while (random === getNumber.last);
    getNumber.last = random;
    return random;
};
  