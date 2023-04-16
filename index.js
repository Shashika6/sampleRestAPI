const express = require("express");
const userRoute = require("./routes/User");

const PORT = 3000;
const app = express();

app.use("/users", userRoute);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))