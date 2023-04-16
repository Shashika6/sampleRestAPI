const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await users.json();
        res.send(data);

    } catch (error) {
        console.log("error occured while fetching users", error);
        res.send(error);
    }

})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await user.json();
        res.send(data);

    } catch (error) {
        console.log("error occured while fetching users", error);
        res.send(error);
    }

})

module.exports = router;