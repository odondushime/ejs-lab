const express = require("express");
const app = express();
const RESTAURANT = {
  name: "The Green Byte Bistro",
  isOpen: true,
  address: "742 Evergreen Rd, Mapleview, OS 45502",
  phone: "555-321-9876",
  menu: [
    {
      id: 1,
      name: "Quantum Quinoa Mushroom Burger",
      price: 13.0,
      rating: 4,
      category: "mains",
      details:
        "A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.",
    },
    {
      id: 2,
      name: "Binary Berry Cheesecake",
      price: 10.11,
      rating: 3,
      category: "desserts",
      details:
        "A creamy cheesecake bursting with flavor. A mix of berries in every byte.",
    },
    {
      id: 3,
      name: "Recursive Rigatoni",
      price: 17.0,
      rating: 5,
      category: "mains",
      details:
        "A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You'll keep coming back for more.",
    },
    {
      id: 4,
      name: "Pumpkin Pi Squared",
      price: 3.14,
      rating: 5,
      category: "desserts",
      details:
        "A delightful pumpkin dessert, squared and spiced to perfection.",
    },
    {
      id: 5,
      name: "Fibonacci String Bean Fries",
      price: 11.23,
      rating: 5,
      category: "sides",
      details:
        "Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.",
    },
  ],
};

app.set("view engine", "ejs"); //this is to set EJS as the templating engine

app.use((req, res, next) => {
  res.locals.RESTAURANT = RESTAURANT;
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

//defining /menu route here
app.get("/menu", (req, res) => {
  res.render("menu", { menu });
});

//defining /menu/:category
app.get("/menu/:category", (req, res) => {
  const category = req.params.category;
  const filteredItems = menuItems.filter((item) => item.category === category);
  // first letter capital
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // Passing the data to view here
  res.render("category", {
    menuItems: filteredItems,
    categoryName: capitalizedCategory,
  });
});

//starting the server
app.listen(3000);
