const express = require("express");
const app = express();
const feedRoutes = require("./routes/feed_routes");

app.use(express.json());

app.use("/feed", feedRoutes);

app.listen(3000);
