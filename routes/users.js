const express = require('express');
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtSecret = require("../config/data.config");
const jwtToken = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();


//@Route : /users/register
//@Method : post
//@access : public

router.post("/register", check("ownerName", "ownerName must be provided").notEmpty(),
    check("companyName", "companyName must be provided").notEmpty(),
    check("ownerEmail", "ownerEmail must be provided").isEmail(),
    check("accessCode", "acesscode must be provided").notEmpty(),
    check("rollNo", "rollNo must be provided").isEmpty(),
    async (req, res) => {
        console.log(jwtSecret);
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        }

        // name = req.body.name


        //payload ,secretkey,expiration,handler

        //res.json({ token });
        //   return res.status(200).json({ result: "user created successfully" });
    });

//@Route : /users
//@Method : post
//@access : public
//@description : used for testing purposes. share the details  of all.

router.get("", (req, res) => {
    res.json({ msg: "hello from user" });
});

module.exports = router;