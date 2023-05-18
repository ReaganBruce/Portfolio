import * as dotenv from "dotenv";
dotenv.config();
import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from 'morgan';
import path from 'path';

//MongoDB Config Import
import { databaseConnection } from "./db/config";

//Route Import
import routes from "./routes/index";

//Client Import
import client from './client.json'

//Middleware Import
import { notFoundHandler, globalErrorHandler } from "./middleware/errorHandler";

//Application Instance
const app = express();

//Database Connection
databaseConnection();

app.use(express.static('public'))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(routes);
app.get(client.routes, (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))
app.use(notFoundHandler);
app.use(globalErrorHandler);


//typecast process.env as number; default type is string | undefined
const PORT = Number(process.env.PORT || 3000);

mongoose.connection.once("open", () => {
  console.log(`MongoDB Connection: ${mongoose.connection.host}`);
  app.listen(PORT, () =>
    console.log(`Server is running on: ${PORT}`)
  );
});
