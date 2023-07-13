import { S3Client } from "@aws-sdk/client-s3";
import configs from ".";

const s3Config = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: configs.a3.access,
    secretAccessKey: configs.a3.secret,
  },
});

export { s3Config };
