const express = require("express");
const app = express();
const cors = require("cors");
const feedRoutes = require("./routes/feedRoutes");
const usersRoutes = require("./routes/usersRoutes");
const dbConnection = require("./config/dbConnection");

dbConnection();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.use("/api/users", usersRoutes);

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
