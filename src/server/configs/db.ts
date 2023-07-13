import mongoose, { ConnectOptions } from "mongoose";
import config from ".";

const databaseConnection = async () => {
  const mongoUri = config.database.mongo;
  try {
    await mongoose.connect(mongoUri, <ConnectOptions>{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export { databaseConnection };
