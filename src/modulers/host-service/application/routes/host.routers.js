// Define the HTTP routes for the Host model.
const express = require("express");
const hostController = require("../controllers/host.controller");

const router = express.Router();

router.post("/", hostController.create);
router.get("/:id", hostController.findById);
router.get("/", hostController.findAll);
router.put("/:id", hostController.update);
router.delete("/:id", hostController.delete);

module.exports = router;
