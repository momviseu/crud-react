const mongoose = require("mongoose");
                //   mongodb+srv://momviseu:momviseu@mg1.6vmxqxr.mongodb.net/crud?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://momviseu:momviseu@mg1.6vmxqxr.mongodb.net/crud?retryWrites=true&w=majority').then((req, res) => {
    console.log("DB Success..!");
}).catch((err) => {
    console.log("err dddddddddddddd" +err.message);
})
    
