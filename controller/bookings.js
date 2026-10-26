
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");


module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const { startDate, endDate } = req.body;
      console.log("Submitted check-in:", startDate);
    console.log("Submitted check-out:", endDate);
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    // Validate that both dates were submitted
    if (!startDate || !endDate) {
        req.flash("error", "Please select both dates.");
        return res.redirect(`/listings/${id}/book`);
    }

    // Parse date-only inputs consistently
    const checkIn = new Date(`${startDate}T00:00:00`);
    const checkOut = new Date(`${endDate}T00:00:00`);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (
        isNaN(checkIn.getTime()) ||
        isNaN(checkOut.getTime()) ||
        checkIn < today ||
        checkOut <= checkIn
    ) {
        req.flash(
            "error",
            "Check-in cannot be in the past, and check-out must be after check-in."
        );
        return res.redirect(`/listings/${id}/book`);
    }

    const nights = Math.round(
        (checkOut - checkIn) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = nights * listing.price;

    const booking = new Booking({
        listing: listing._id,
        user: req.user._id,
        startDate: checkIn,
        endDate: checkOut,
        nights,
        totalPrice
    });

    await booking.save();

    req.flash(
        "success",
        `Booking confirmed! ${nights} night(s), estimated total: ₹${totalPrice.toLocaleString("en-IN")}.`
    );

    return res.redirect("/listings/my-bookings");
};




module.exports.myBookings = async (req, res) => {
    const bookings = await Booking.find({
        user: req.user._id
    }).populate("listing");

    res.render("bookings/index.ejs", { bookings });
};
