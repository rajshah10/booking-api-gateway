const express = require("express");

const axios = require("axios");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/login",
            req.body
        );

        res.json(response.data);

    } catch (error) {
        console.error("Auth Service error:", error.message);
        res.status(500).json({
            message: "Auth Service unavailable",
        });

    }

});

module.exports = router;
