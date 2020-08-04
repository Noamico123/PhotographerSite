const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      description: "Japan",
      longDescription: "the best Black Shoes u ever saw",
      img: "a.jpg",
    },
    {
      id: 2,
      description: "Rainbow",
      longDescription: "the best Blue Shirt u ever saw",
      img: "b.jpg",
    },
    {
      id: 3,
      description: "SanFran",
      longDescription: "the best shoe ever",
      img: "c.jpg",
    },
    {
      id: 4,
      description: "Sunset",
      longDescription: "the best orange Shirt u ever saw",
      img: "d.jpg",
    },
    {
      id: 5,
      description: "India",
      longDescription: "the best belt ever",
      img: "e.jpg",
    },
    {
      id: 6,
      description: "Aqua",
      longDescription: "the best belt ever",
      img: "f.jpg",
    },
    {
      id: 7,
      description: "Japan",
      longDescription: "the best Blue Shirt u ever saw",
      img: "a.jpg",
    },
    {
      id: 8,
      description: "Rainbow",
      longDescription: "the best shoe ever",
      img: "b.jpg",
    },
    {
      id: 9,
      description: "Rainbow",
      longDescription: "the best shoe ever",
      img: "e.jpg",
    },
    {
      id: 10,
      description: "Rainbow",
      longDescription: "the best shoe ever",
      img: "f.jpg",
    },
  ];
  res.send(products);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
