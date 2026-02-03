const express = require("express");
const webhookRoutes = require("./routes/webhook");

const app = express();

app.use(express.json());

app.use("/webhook", webhookRoutes);

app.listen(8080, () => console.log("Server running on port 8080"));
