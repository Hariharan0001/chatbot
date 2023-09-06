const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    key:{
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    }
});
const usermodel = mongoose.model("info",schema,"Information");
module.exports=usermodel;