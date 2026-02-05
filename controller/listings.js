const Listing=require("../models/listing.js");
  

//call back of index route
module.exports.index=async(req,res)=>{
const arr=await Listing.find({});
    res.render("listings/index.ejs",{arr});
}
 

//call back for rendering form 
module.exports.renderNewForm=(req, res) => {
  res.render("listings/new.ejs")
}


//call back for showing one hotel properly on a page 
module.exports.showListing=async(req,res)=>{
 let {id}=req.params;
 const hotel=await Listing.findById(id).populate({
  path:"reviews",
  populate:{
    path:"author",
  },
})
.populate('owner');
 if(!hotel){
   req.flash("error","Hotel not found")
    return res.redirect("/listings")
 }
     res.render("listings/show.ejs",{hotel});
}

//callback for creating new listing
module.exports.createListing=async(req,res,next)=>{
  let url=req.file.path;
  let filename=req.file.filename;

   const newHotel=new Listing(req.body.listing);
   newHotel.owner=req.user._id;
   newHotel.image={url,filename};
  await newHotel.save();
  req.flash("success","New listing created")
  res.redirect("/listings")
    }
  

//callback for rendering new edit form
module.exports.renderEditForm=async(req,res)=>{
 let {id}=req.params;
 const listing=await Listing.findById(id);
 if(!listing){
   req.flash("error","Hotel not found")
    return res.redirect("/listings")
 }
   res.render("listings/edit.ejs",{listing});
}    

//callback for update listing new edit form
module.exports.updateListing=async(req,res)=>{
   let {id}=req.params;
   let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });
   if(typeof req.file!=="undefined"){
   let url=req.file.path;
   let filename=req.file.filename;
  listing.image={url,filename};
  await listing.save();
}
    req.flash("success","updated")
   res.redirect(`/listings/${id}`)
  }


//callback for destroy the listing
  module.exports.destroyListing=async(req,res)=>{
     let {id}=req.params;
     await Listing.findByIdAndDelete(id);
      req.flash("success","listing deleted")
      res.redirect("/listings")
    }