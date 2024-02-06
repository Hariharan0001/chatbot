const express = require('express');
const app = express();
const mongoose =require('mongoose');
const usermodel=require('./user');
const cors=require('cors');
app.use(cors());
app.use(express.json());
/*mongoose.connect("mongodb+srv://hariharan:9944995381@cluster0.ex0oggl.mongodb.net/chatbot");*/
mongoose.connect('mongodb+srv://hariharan:9944995381@cluster0.ex0oggl.mongodb.net/chatbot?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{console.log("success")}).catch((err)=>{console.log("no connection",err)});
app.get('/getval', async (req, res) => {
    try {
      const result = await usermodel.find({key:"crop"});
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  });
  app.post('/getvalues',async (req,res)=>{
    let request= req.body.key;
    try {
      const result = await usermodel.find({key:`${request}`});
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  });
app.listen(5000);
app.get("/",(req,res)=>{
    res.send("Api running");
})
