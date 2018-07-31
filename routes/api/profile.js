//constants which are required
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

//load validation
const validateProfileInput = require("../../validation/profile");
//define router
const router = express.Router();

//load profile model
const profile = require("../../models/Profile");
//load user model
const user = require("../../models/User");

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
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";

          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/profile/
// @desc POST create or edit user profile
// @access private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    //check validation
    if (!isValid) {
      //return any errors with 400
      return res.status(400).json(errors);
    }
    //get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.status) profileFields.status = req.body.status;
    //skills split
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    if (req.body.experience) profileFields.experience = req.body.experience;
    if (req.body.education) profileFields.education = req.body.education;

    //social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    //if (req.body.date) profileFields.date = req.body.date;

    profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //update profile
        profile
          .findOneAndUpdate(
            {
              user: req.user.id
            },
            {
              $set: profileFields
            },
            { new: true }
          )
          .then(profile => res.json(profile));
      } else {
        //create

        //check
        profile.findOne({ handle: profileFields }).then(profile => {
          if (profile) {
            errors.handle = "This handle already exists";
            res.status(400).json(errors);
          }
          //save new profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
