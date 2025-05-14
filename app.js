const express=require('express');
const app=express();
const mongoose=require('mongoose');
const mongooseurl='mongodb://127.0.0.1:27017/Nest';
const path=require('path');
const passport=require('passport');
const LocalStartegy=require('passport-local');
const User=require('./Models/users');
const flash = require("connect-flash");
//requring the express sessions
const sessions=require('express-session');



//middle wares

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//by default flash is used after sessions is decleared
// const flash=require('connect-flash');


const sessionOptions={
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie :{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge:7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    }
}

app.use(sessions(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStartegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
})

//requiring Users for the signup
const userrouter=require('./Router/users');
app.use('/', userrouter);




app.get('/',(req,res)=>{
    // res.send('hi, I am root');
    res.render('home');
})



//requiring the listing and review routers
const listingRouter = require('./Router/routes');
const reviewRouter = require('./Router/review');



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


//ejs-mate for more adv templateing
const ejsmate=require('ejs-mate');
app.engine("ejs",ejsmate);

//public folder for styling or static serving
app.use(express.static(path.join(__dirname,"/public")));

//put or delete directly not works due to limitations in html so we use override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//importing the listing to get acess for images and stuff
const listing=require('./Models/listing');

//importing the reviews for adding reviews
const review=require('./Models/review');

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongooseurl);
}




//use the listings route
app.use('/listings', listingRouter);

// Use the review router for all /listings/:id/reviews routes
app.use('/listings/:id/reviews', reviewRouter);





// app.use((err,req,res,next)=>{
//     res.send("something went wrong");
// })


app.listen(8080,(req,res)=>{
    console.log("app is listening on port 8080");
})
