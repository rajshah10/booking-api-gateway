const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    console.log("Login request received");
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({
        message: "Login request received by API Gateway",
    });
});

module.exports = router;