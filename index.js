const express = require("express");
const app = express();
const PORT = 8080;

const users = require("./MOCK_DATA.json");

// app.use(express.json());

app.listen(PORT, () => console.log(`its live on http://localhost:${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "blue",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({
      message: "WE NEED A LOGO!",
    });
  }

  res.status(200).send({
    id: id,
    logo: logo,
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});
