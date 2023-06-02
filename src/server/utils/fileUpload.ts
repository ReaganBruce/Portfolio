import multer, { FileFilterCallback } from "multer";
import multerS3 from "multer-s3";
import { s3Config } from "../configs/aws";

const fileFilter = (req: Express.Request, file: Express.MulterS3.File, cb: FileFilterCallback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    // regex file extension validation
    return cb(new Error("Image extension not satisfied."));
  }
  cb(null, true);
};

const multerS3Config = multerS3({
  s3: s3Config,
  acl: "public-read",
  bucket: String(process.env.BUCKET),
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file?.fieldname });
  },
  key: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const uploadProjectImage = multer({
  storage: multerS3Config,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10000000,
  },
});

export { uploadProjectImage };
