import mongoose, { ConnectOptions } from "mongoose";


const databaseConnection = async () => {
  const mongoUri = String(process.env.MONGO_URI);
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
