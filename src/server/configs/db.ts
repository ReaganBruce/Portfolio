import mongoose, { ConnectOptions } from "mongoose";
import config from './config'


const databaseConnection = async () => {
  const mongoUri = String(config.database.mongo);
  try {
    await mongoose.connect(mongoUri, <ConnectOptions> {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};


export { databaseConnection };
