import AWS from 'aws-sdk'
import configs from '.'

const s3 = new AWS.S3({
    accessKeyId: configs.a3.access,
    secretAccessKey: configs.a3.secret
})

export { s3 }