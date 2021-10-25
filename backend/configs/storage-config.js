const multer = require('multer');

//configuration stockage des fichiers 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploaded-files')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
});

const upload = multer({ storage: storage });

module.exports = upload;