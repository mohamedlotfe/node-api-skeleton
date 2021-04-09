var express = require("express");
const router = express.Router();

const users = [{ id: 1, name: 'ahmed' }, { id: 2, name: 'mohamed' }]

router.get("/users", (req, res) => {
    res.send(users);
});

router.get("/users/:id", async (req, res) => {

});

router.post("/users", async (req, res) => {

});
router.put("/users", async (req, res) => {

});
router.patch("/users/:id", async (req, res) => {

});

router.delete("/users/:id", async (req, res) => {
});

module.exports = router;
