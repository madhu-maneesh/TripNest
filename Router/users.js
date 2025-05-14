const express = require('express');
const router = express.Router();
const User=require('../Models/users');
const passport=require('passport');
// const { isLoggedIn } = require('../middleware');
const { saveRedirectUrl } = require('../middleware');


//Get login
router.get("/login", (req, res) => {
    res.render("users/login");
});


 //Post :redirect after the login
//  router.post('/login', saveRedirectUrl,
//     passport.authenticate('local', { failureRedirect: '/login' }),
//     async (req, res)=> {
//       res.redirect(res.locals.redirectUrl);
// });
router.post('/login', saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/login' }),
    async (req, res) => {
      res.redirect(res.locals.redirectUrl || '/listings');
});


//Get logout

router.get("/logout",(req,res)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        res.render('home');
    });
});




// GET: Show the signup form
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

// POST: Handle the signup form submission
router.post("/signup", async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser,(err)=>{
            if(err){
                next(err);
            }
        res.redirect('/listings');
        })
    } catch (err) {
        if (err.name === "UserExistsError") {
            // Passport-local-mongoose throws this for duplicate usernames
            return res.send("Username already exists. Please choose a different one.");
        }

        // Handle other errors like duplicate email, etc.
        if (err.code === 11000) {
            // MongoDB duplicate key error (likely email)
            return res.send("Email already exists. Try logging in or use a different email.");
        }

        res.send("Something went wrong during signup.");
    }
});

  

module.exports=router;