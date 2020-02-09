const multer = require('multer');
const uuidv4 = require('uuid/v4');

const DIR = './client/src/media/products';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(' ')
      .join('-');
    cb(null, uuidv4() + '-' + fileName);
  }
});

let uploadProductImages = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          'solos los formatos ".png", ".jpg" y ".jpeg" son permitidos 0:!!!'
        )
      );
    }
  }
});

module.exports = uploadProductImages;
