const express = require('express');
const router = express.Router();
const listing = require('../Models/listing');
const { isLoggedIn } = require('../middleware');

//index route
// router.get('/', async (req, res) => {
//     let allListings=await listing.find({});
//     res.render("listings/index.ejs",{ allListings });
// });
router.get("/", async (req, res) => {
    let searchQuery = req.query.q;
    let allListings;

    if (searchQuery) {
        allListings = await listing.find({
    $or: [
        { title: { $regex: searchQuery, $options: "i" } },
        { location: { $regex: searchQuery, $options: "i" } },
        { country: { $regex: searchQuery, $options: "i" } }
    ]
});
    } else {
        allListings = await listing.find({});
    }

    res.render("listings/index.ejs",{ allListings });
});


//new route
router.get('/new',isLoggedIn,(req,res)=>{
        res.render('listings/new.ejs');
    });


//show route
router.get('/:id', async (req, res) => {
    try {
      let { id } = req.params;
      let showListing = await listing.findById(id).populate('reviews').populate('owner');
      if (!showListing) {
        return res.status(404).send("Listing not found");
      }
      res.render("listings/show.ejs", { showListing });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });

// create route
router.post("/",isLoggedIn,async (req,res)=>{
  try {
    const list = new listing(req.body.listing); 
    list.owner=req.user._id;

    if (!list.image || !list.image.url) {
      list.image = {
        url:  "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "default.jpg"
      };
    }

    await list.save();
    req.flash("success","New Listing Created");

    res.redirect("/listings");
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).send("Error creating listing");
  }
})

//edit route
router.get("/:id/edit",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    let editListings=await listing.findById(id);
    await res.render("listings/edit.ejs",{ editListings });
});

//put route
router.put("/:id",async (req,res)=>{
    let {id}=req.params;
    await listing.findByIdAndUpdate(id,{...req.body.listings});
    res.redirect(`/listings/${id}`);
})

//Delete Route
router.delete("/:id",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    const deletedlisting= await listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");

    res.redirect("/listings");
})


module.exports = router;