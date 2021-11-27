const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema=new Schema({
  title:{
    type:String,
    required:true,
    minlength:1
  },
  content:{
    type:String,
    required:true,
    minlength:10
  }
},{timestamp:true});

module.exports=mongoose.model('blog',BlogSchema);
