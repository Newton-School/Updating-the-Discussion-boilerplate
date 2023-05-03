const express = require("express");

const { getalldiscussion, creatediscussion, deletediscussion, updatediscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getalldiscussion);
router.post("/create", creatediscussion);
router.post("/delete/:id",deletediscussion );
router.post("/update/:id", updatediscussion);

module.exports = router;