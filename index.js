const mongoose=require('mongoose');
const main=async()=>{
  await mongoose.connect('mongodb://localhost:27017/youtube')
  const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
  });
  const ProductModel=mongoose.model('videos',ProductSchema);
  let data=new ProductModel({name:"m8",price:1000 ,brand:"xyz",category:"mobile"});
  let result=await data.save();
  console.log(result);

}
main();
