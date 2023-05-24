import dotenv from "dotenv";

dotenv.config();

export default {
  
    application: {
    
        port: process.env.PORT,
  
    },
    database: {

        mongo: process.env.MONGO_URI
    
    }
};
