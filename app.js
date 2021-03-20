const express = require("express");
const app = express();
const feedRoutes = require("./routes/feedRoutes");
const dbConnection = require("./config/dbConnection");

dbConnection();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api/feed", feedRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
