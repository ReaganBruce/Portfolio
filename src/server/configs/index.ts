import dotenv from "dotenv";

dotenv.config();

export default {
  
    application: {
    
        port: process.env.PORT,
  
    },
    database: {

        mongo: process.env.MONGO_URI
    
    },
    a3: {
        access: process.env.ACCESS_KEY,
        secret: process.env.SECRET_ACCESS_KEY,
        bucket: process.env.BUCKET
    },
    jwt: {
        token: process.env.TOKEN
    }
};
