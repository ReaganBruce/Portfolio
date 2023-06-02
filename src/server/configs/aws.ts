import { S3Client } from '@aws-sdk/client-s3'
import configs from '.'

const s3Config = new S3Client({
    region: "us-east-2",
    credentials: {
        accessKeyId: String(configs.a3.access),
        secretAccessKey: String(configs.a3.secret)
    }
    
   
})

export { s3Config }