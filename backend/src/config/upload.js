const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req,file,cb)=>{
            //cb(null,`${file.originalname}`/* -`${(new Date()).getUTCMilliseconds()}` */`${path.extname(file.originalname)}`);
            cb(null,'teste',path.extname(file.originalname));

        }
    })
}
