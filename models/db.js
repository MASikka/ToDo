const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://ma-sikk:Parool123@cluster0.fcofb.mongodb.net/WishListDB', { useNewUrlParser: true, useUnifiedTopology: true });

require('./wish');