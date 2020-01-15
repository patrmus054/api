const path = require("path");
const auth = require("http-auth");
const express = require("express");
const mongoose = require("mongoose");
const {
  body,
  validationResult
} = require("express-validator/check");

const router = express.Router();
const Registration = mongoose.model("Registration");
const Food = require("../models/Food");

const basic = auth.basic({
  file: path.join(__dirname, "../users.htpasswd")
});

router.get("/food/:name", (req, res) => {
  const reg = new RegExp(req.params.name.toUpperCase())
  Food.find({
      name: reg
    })
    .then(foods => {
      res.json({
        foods
      })
    })
    .catch(() => {
      res.send("Sorry! Something went wrong.");
    });
});

router.post(
  "/food/",
  [
    body("name")
    .isLength({
      min: 1
    })
    .withMessage("Please enter a name"),
    body("calories")
    .isLength({
      min: 1
    })
    .withMessage("Please enter an calories"),
    body("protein")
    .isLength({
      min: 1
    })
    .withMessage("Please enter a protein"),
    body("fat")
    .isLength({
      min: 1
    })
    .withMessage("Please enter a fat"),
    body("carbohydrates")
    .isLength({
      min: 1
    })
    .withMessage("Please enter a carbohydrates")
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const food = new Food(req.body);
      food.name = food.name.toUpperCase();
      food
        .save()
        .then(() => {
          res.send("Thank you for new food!");
        })
        .catch(() => {
          res.send("Sorry! Something went wrong.");
        });
    } else {
      res.render("form", {
        title: "Food form",
        errors: errors.array(),
        data: req.body
      });
    }
  }
);

router.get("/", (req, res) => {
  res.render("form", {
    title: "Registration form"
  });
});

router.get("/registrations", auth.connect(basic), (req, res) => {
  Registration.find()
    .then(registrations => {
      res.render("index", {
        title: "Listing registrations",
        registrations
      });
    })
    .catch(() => {
      res.send("Sorry! Something went wrong.");
    });
});

router.post(
  "/",
  [
    body("name")
    .isLength({
      min: 1
    })
    .withMessage("Please enter a name"),
    body("email")
    .isLength({
      min: 1
    })
    .withMessage("Please enter an email")
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration
        .save()
        .then(() => {
          res.send("Thank you for your registration!");
        })
        .catch(() => {
          res.send("Sorry! Something went wrong.");
        });
    } else {
      res.render("form", {
        title: "Registration form",
        errors: errors.array(),
        data: req.body
      });
    }
  }
);
module.exports = router;