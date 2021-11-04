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

exports.postNewWish = (req, res) => {
    const userWish = req.body.newWish;
    const userDate = date.getTodayDateShort();
    let newWish = new WishFromMongo();
    newWish.description = userWish;
    newWish.date = userDate;
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
    const checkedItemId = req.body.checkbox;
     WishFromMongo.findByIdAndRemove(checkedItemId, (error)=>{
        if(!error){
            res.redirect('/admin');
        }else{
            console.log("Failed to delete");
        }
    });
    

};