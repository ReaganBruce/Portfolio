import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";

//Config Import
import { databaseConnection } from "./configs/db";
import { configurePassport } from "./middleware/passport-strategies.mw";
import config from "./configs/index";

//Route Import
import routes from "./routes/index";

//Client Import
import client from "./configs/client.json";

//Middleware Import
import { notFoundHandler, globalErrorHandler } from "./middleware/errorHandler.mw";

//Application Instance
const app = express();

//Database Connection
databaseConnection();

//Passport Connection
configurePassport(app)

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(routes);
app.get(client.routes, (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);
app.use(notFoundHandler);
app.use(globalErrorHandler);

mongoose.connection.once("open", () => {
  console.log(`MongoDB Connection: ${mongoose.connection.host}`);
  app.listen(config.application.port, () =>
    console.log(`Server is running on: ${config.application.port}`)
  );
});
