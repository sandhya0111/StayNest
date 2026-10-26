// const express=require("express");
// const router=express.Router();
// const wrapAsync= require('../utils/wrapAsync.js');
// const{isLoggedIn,isOwner,validateListing}=require("../middleware.js");
// const listingController=require("../controller/listings.js")
// const bookingController = require("../controller/bookings.js");
// const multer  = require('multer')
// const {storage}=require("../cloudConfig.js")
// const upload = multer({storage})

// //index route
// router.route("/")
// .get(wrapAsync (listingController.index))
//  .post( isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync (listingController.createListing))


// // new route  
// router.get('/new',isLoggedIn,listingController.renderNewForm)




// router.get(
//     "/my-bookings",
//     isLoggedIn,
//     wrapAsync(bookingController.myBookings)
// );



// router.route("/:id")
// .get(wrapAsync (listingController.showListing))
// .put(isLoggedIn,isOwner,validateListing,upload.single("listing[image]"),wrapAsync (listingController.updateListing))
// .delete(isLoggedIn,isOwner,wrapAsync (listingController.destroyListing))


// //vooking route
// router.get(
//     "/:id/book",
//     isLoggedIn,
//     wrapAsync(listingController.renderBookingForm)
// );

// router.post(
//     "/:id/book",
//     isLoggedIn,
//     wrapAsync(bookingController.createBooking)
// );

// //edit route 

// router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync (listingController.renderEditForm));




//   module.exports=router;




const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {
    isLoggedIn,
    isOwner,
    validateListing
} = require("../middleware.js");

const listingController = require("../controller/listings.js");
const bookingController = require("../controller/bookings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index routes
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );

// New listing route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// My bookings
router.get(
    "/my-bookings",
    isLoggedIn,
    wrapAsync(bookingController.myBookings)
);

// Booking routes
router.get(
    "/:id/book",
    isLoggedIn,
    wrapAsync(listingController.renderBookingForm)
);

router.post(
    "/:id/book",
    isLoggedIn,
    wrapAsync(bookingController.createBooking)
);

// Show, update, and delete listing
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        validateListing,
        upload.single("listing[image]"),
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    );

// Edit listing
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;
