import multer from "multer";

const uploadFile = multer({
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) { // regex file extension validation
      return cb(new Error("Image extension not satisfied."));
    }
    cb(undefined, true);
  },
});

export { uploadFile };
