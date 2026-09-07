const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Booking API Gateway is Running",
    });
});
app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`API Gateway running on ${PORT}`);
});