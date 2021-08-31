const multer = require('multer');


/*const multerConfig = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, 'public/');
    }, filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `image-${Date.now()}.${ext}`)
    }
});*/

/*const imageLimiter = {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },*/

/*const filterImage = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
   cb(undefined, true)
}*/


 upload = multer({
    dest: 'public/',
    multerConfig: multer.diskStorage({ 
        destination: (req, file, cb) => {
            cb(null, 'public/');
        }, filename: (req, file, callback) => {
            const ext = file.mimetype.split('/')[1];
            cb(null, `image-${Date.now()}.${ext}`)
        }
    }),
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload an image'))
         }
       cb(undefined, true)
    },

    }
);

exports.uploadImage = upload.single('image_url')

exports.upload = (req, res) => {
    res.status(200).json({
        success: 'Success',
    })
};

//This file is in .js because the multer package has a conflicted .ts files