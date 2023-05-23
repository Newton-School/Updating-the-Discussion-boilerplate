const express = require("express");

const { getAllDiscussion, createDiscussion, deleteDiscussion, updateDiscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getAllDiscussion);
router.post("/create", createDiscussion);
router.post("/delete/:id",deleteDiscussion );
router.post("/update/:id", updateDiscussion);

module.exports = router;
