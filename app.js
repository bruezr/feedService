const express = require("express");
const app = express();
const feedRoutes = require("./routes/feedRoutes");
const dbConnection = require("./config/dbConnection");

dbConnection();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/feed", feedRoutes);

app.use("/", (req, res, next) => {
  try {
    res.status(404).send("Endpoint inexistente");
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode).json({
    message: error.message,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
