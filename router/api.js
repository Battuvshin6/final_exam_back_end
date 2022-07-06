const express = require("express");
const router = express.Router();
const modelController = require("../controller/modelController.js");
router.get("/get-task", modelController.getTask);
router.post("/create-task", modelController.createTask);
router.put("/update-tast", modelController.updateTask);
router.delete("/delete-task", modelController.deleteTask);

module.exports = router;
