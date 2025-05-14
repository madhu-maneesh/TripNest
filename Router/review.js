const express = require('express');
const router = express.Router({ mergeParams: true }); // This is the key fix!
const review = require('../Models/review');
const listing = require('../Models/listing');

// Review route - POST /listings/:id/reviews
router.post("/", async (req, res) => {
    try {
        let { id } = req.params; 
        let { comment, emoji } = req.body;
        let newReview = new review({ comment, emoji });

        await newReview.save();

        // Adding review to listing
        let foundListing = await listing.findById(id);
        foundListing.reviews.push(newReview._id);
        await foundListing.save();
        req.flash("success","New Review Created");
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send("There was an error saving the review.");
    }
});

module.exports = router;