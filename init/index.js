const mongoose = require('mongoose');
const Listing=require("../models/listing.js");
const initData=require("./data.js")

main().then((res)=>{console.log("connection success")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StayNest');
}
 const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"69771fedd4777fc70c34c768"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialised")
 }
 initDB();