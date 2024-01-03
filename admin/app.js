const express = require("express");
const app = express();
const mongoose = require("mongoose");
const products = require("../api/routes/product");
const dashboard = require("../api/routes/admin");
const user = require("./routes/User");
const cors = require("cors");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const ExpressError = require("./utils/ExpressError");

const MONGO_URL = "mongodb://127.0.0.1:27017/bazzar";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.use(cors());
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

const sessionOptions = {
    secret:"fsdkbnngnfnv",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 *60 * 1000,
        maxAge: 7 * 24 * 60 *60 * 1000,
        httpOnly:true
    },
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currUser = req.user;
    next();
});

app.use("/Products",products);
app.use("/Admin",dashboard);
app.use("/",user);

app.get("/",(req,res)=>{
    res.send("I am root");
})

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"));
})

app.listen(8080,()=>{
    console.log("Port is listning on 8080");
})