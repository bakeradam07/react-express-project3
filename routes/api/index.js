const router = require("express").Router();
const drinkRoutes = require("./drinks");
const movieRoutes = require("./movies");

// Book routes
router.use("/drinks", drinkRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
