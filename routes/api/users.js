const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const router = express.Router();

// @route GET api/users/test
// @desc Tests Users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

// @route GET api/users/register
// @desc Register Users route
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "m" //default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route GET api/users/login
// @desc Tests Users / return jwt token
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //find user
  User.findOne({ email }).then(user => {
    //check user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }

    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        res.json({ msg: "success" });
      } else {
        return res.status(400).json({ password: "Password incorrect!" });
      }
    });
  });
});
module.exports = router;
