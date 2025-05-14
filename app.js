require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require("connect-flash");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

// Models
const User = require('./Models/users');
const listing = require('./Models/listing');
const review = require('./Models/review');

// Routers
const userRouter = require('./Router/users');
const listingRouter = require('./Router/routes');
const reviewRouter = require('./Router/review');

// Database Connection
// Database Connection
const mongoUrl = process.env.MONGODB_URI;

main()
  .then(() => console.log(" Connected to MongoDB Atlas"))
  .catch(err => console.error(" MongoDB Connection Error:", err));

async function main() {
  await mongoose.connect(mongoUrl);
}


// Session Store Setup
const store = MongoStore.create({
    mongoUrl,
    crypto: {
        secret: process.env.SESSION_SECRET || "mysupersecretcode",
    },
    touchAfter: 24 * 3600,
});
store.on("error", (err) => {
    console.log("Session Store Error:", err);
});

// Session Configuration
const sessionOptions = {
    store,
    secret: process.env.SESSION_SECRET || "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

// App Settings
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionOptions));
app.use(flash());

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Global Locals Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use('/', userRouter); // Handles /login, /signup, etc.
app.use('/listings', listingRouter);
app.use('/listings/:id/reviews', reviewRouter);

// Home Page
app.get('/', (req, res) => {
    res.render('home');
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(` App running on port ${PORT}`);
});
