const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//load profile model
const profile = require("../../models/Profile");
//load user model
const profile = require("../../models/User");

// @route GET api/profile/test
// @desc Tests Profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

// @route GET api/profile/
// @desc Get current user's profile route
// @access private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    profile
      .findOne({ user: req.user.id })
      .then(Profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";

          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
