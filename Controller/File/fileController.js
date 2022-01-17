const fs = require('fs');
const path = require('path');
const uploadPath = path.join('./uploads');
const csv = require('csv-parser')

module.exports = {
    //upload file
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
    },

    //Read CSV file and send data as a response
    readFile: async (req,res) => {  
        let result = [];     
        //Create a read stream 
        fs.createReadStream(path.join('./uploads/data.csv'))
        .pipe(csv())
        .on('data',(data)=>{ 
            //pushing csv data to result
            result.push(data);
        })
        .on('end',()=>{
            JSON.stringify(result);
            return res.json({message:"File Read Successfully. This is CSV Data in JSON Format",result});
        });
    }
    
}