const fs = require('fs');
const path = require('path');
const uploadPath = path.join('./uploads');

module.exports = {
    uploadFile: async (req,res) => {        
        req.pipe(req.busboy)    //piping request         
        req.busboy.on('file',(fieldname, file, filename)=>{
            console.log(`Upload of ${{filename}} started`);
             // Create a write stream of the new file            
             const fstream = fs.createWriteStream(path.join(uploadPath, filename.filename));
            file.pipe(fstream);

             // On finish of the upload
            fstream.on('close', () => {
                console.log(`Upload of '${filename}' finished`);
                res.status(200).json(`${filename.filename} uploaded successfully.`);
            });
        }) 
    }
}