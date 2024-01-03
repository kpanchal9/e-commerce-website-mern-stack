const User = require("../models/user.js");

module.exports.SignUpForm = async(req,res) =>{
    try {
        let {username,password,email} = req.body;
        const newUser = new User({email,username});
        const registerUser = await User.register(newUser,password);
        console.log(registerUser);
        req.login(registerUser, () => {
            res.redirect("/");
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.login = async(req,res) =>{
    let redirectUrl = res.locals.redirectUrl || "/Products";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/Products");
    });
};