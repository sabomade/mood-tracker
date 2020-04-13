const router = require("express").Router();
const userRoutes = require("./users");
const studentRoutes = require("./students");

//localhost:3000/api

// User routes
router.use("/users", userRoutes);

// Kindacts routes
router.use("/students", studentRoutes);

module.exports = router;
