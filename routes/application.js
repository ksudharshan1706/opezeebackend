const express = require("express");
const {
  addApplication,
  getapps,
  getapp,
  deleteapp,
} = require("../controllers/application");
const router = express.Router();

router.post("/", addApplication);
router.get("/", getapps);
router.get("/:id", getapp);
router.delete("/:id", deleteapp);
module.exports = router;
