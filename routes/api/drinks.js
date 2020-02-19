const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");

// Matches with "/api/drinks"
router.route("/")
  .get(drinksController.findAll)
  router.post("/",function(req, res){
    console.log(req.body)
    drinksController.create(req, res)
  });

// Matches with "/api/drinks/:id"
router
  .route("/:id")
  .get(drinksController.findById)
  .put(drinksController.update)
  .delete(drinksController.remove);

module.exports = router;
