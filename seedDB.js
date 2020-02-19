const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3-react"
);

const drinkSeed = [
  {
    name: "Bloody Mary",
    brewer: "",
    ingredients:
      "3 cups (24 ounces) tomato juice",
      "1 1/2 ounces freshly squeezed lemon juice (from about 1 medium lemon)":
      "1 1/2 ounces freshly squeezed lime juice (from about 2 medium limes)",
      "1 tablespoon Worcestershire sauce":
      "2 teaspoons peeled and finely grated fresh horseradish",
      "1 1/2 teaspoons kosher salt":
      "1 teaspoon hot sauce, such as Tabasco",
      "1 teaspoon celery salt":
      "3/4 teaspoon freshly ground black pepper",
    date: new Date(Date.now())
  }
];

db.Drink
  .remove({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
