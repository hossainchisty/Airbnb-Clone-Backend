// Define the HTTP routes for the Listing model.
const express = require("express");
const listingController = require("../controllers/listing.controller");

const router = express.Router();

// POST /listings
router.post("/", listingController.create);

// // GET /listings
router.get("/", listingController.findAll);

// GET /listings/:id
router.get("/:id", listingController.findById);

// PUT /listings/:id
router.put("/:id", listingController.update);

// DELETE /listings/:id
router.delete("/:id", listingController.delete);

module.exports = router;
