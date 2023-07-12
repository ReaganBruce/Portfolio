declare namespace Express {
  export interface Request {
    file?: Express.Multer.File & Express.MulterS3.File;
  }
}


//"File" Object is utilizing BOTH standard Multer and MulterS3 types.
//StackOverflow Ref: https://stackoverflow.com/questions/65811416/how-to-use-multer-s3s-type-definition-for-req-file-rather-than-multers
