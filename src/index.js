const express = require("express");
const { connectMongoDB } = require("./db/connect");
const cors = require("cors");
const AuthRoute = require("./routes/auth");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const main = async () => {
  const app = express();
  const port = process.env.PORT;
  connectMongoDB();
  app.use(cors({}));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.get("/", function (req, res) {
    res.send("Server is up and running");
  });

  app.use("/api/auth", AuthRoute);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(port, () => {
    console.log("Server Running at port", port);
  });
};

main();
