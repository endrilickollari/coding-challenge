const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db");

const storage = new GridFsStorage({
    url: dbConfig.url + dbConfig.database,
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-coding-challenge-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: dbConfig.imgBucket,
            filename: `${Date.now()}-coding-challenge-${file.originalname}`
        };
    }
});

const uploadFiles = multer({storage: storage}).array("file", 10);
// var uploadFiles = multer({ storage: storage }).single("file");
const uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
