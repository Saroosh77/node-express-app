const express = require("express");
const app = express();
const PORT = 8080;

const users = require("./MOCK_DATA.json");

app.use(express.json());

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

app.get("/users/html", (req, res) => {
  const html = `
    <ul>
        ${users
          .map(
            (user) =>
              `<li>${user.id}</li>
          <li>${user.first_name}</li>
          <li>${user.last_name}</li>
          <li>${user.gender}</li>
          <li>${user.ip_address}</li>`
          )
          .join("")}
        </ul>
    `;
  res.send(html);
});

app.route("/users").get((req, res) => {
  res.json(users);
});

app.route("/users/:id").get((req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === Number(id));
  return res.json(user);
});

app.route("/users").post((req, res) => {
  const { id, first_name, last_name, gender, ip_address } = req.body;

  const user = {
    id,
    first_name,
    last_name,
    gender,
    ip_address,
  };

  const existingUser = users.find((user) => user.id === Number(id));

  if (!existingUser) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({
      message: "user exists",
    });
  }
});

app
  .route("/users/:id")
  .patch((req, res) => {
    const id = req.params.id;
    const { ip_address } = req.body;

    const user = users.find((user) => user.id === Number(id));

    if (user) {
      user.ip_address = ip_address;
    }

    return res.json(user);
  })
  .delete((req, res) => {
    const id = req.params.id;

    const user = users.find((user) => user.id === Number(id));

    if (user) {
      return res.status(200).json({
        message: "User deleted",
      });
    } else return res.status(404).json({ message: "user does not exist" });
  });
