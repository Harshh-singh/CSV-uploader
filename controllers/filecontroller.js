    const Files = require('../models/file_schema');
    const csv = require('csv-parser');
    const fs = require('fs');
const { head } = require('../routes/file');

    module.exports.upload = async function(req,res){
       
        try{
            // if no file selected
            if(!req.file){
            return res.status(404).send('No files are selected');
            }
            //if file is not csv
            if (req.file.mimetype != 'text/csv') {
                return res.status(404).send('Select CSV files only');
            }
            //create new file
            let newfile = await Files.create({
            filename: req.file.originalname,
            filepath: req.file.path,
            file: req.file.filename
            })

        }catch(err){
            console.log(`Error in creating project: ${err}`);
        }

        res.redirect('/');

    }



    module.exports.view = async function(req,res){

        try{
        // get the id of clicked file
        const fileId = req.params.id;

        //get the file from DB
        const myfile = await Files.findOne({
            _id:fileId
        });

        const header = [];
        const result = [];
        fs.createReadStream(myfile.filepath) //create readstream
        .pipe(csv())
        .on("headers", (headers)=>{
            headers.map((head)=>{
                header.push(head)  //push headers to header array
            });
        })
        .on("data", (chunk)=>{    
            result.push(chunk);    //push data to result array
        })
        .on("end", ()=>{
            res.render("file_viewer", {     //rendering to file_viewer
                title: "File Viewer",
                filename: myfile.filename,
                head: header,
                data: result,
                length: result.length
            })
        })

        // console.log(myfile);

     } catch (error) {           
            console.log('Error in fileController/view', error);
            res.status(500).send('Internal server error');
        }

    }



    module.exports.delete = async function(req,res){
        // get the id of clicked file
        const fileId = req.params.id;

        //get the file from DB
        const myfile = await Files.findOne({
            _id:fileId
        });

        //if there is no file return status and a message that file not found
        if(!myfile){
            return res.status(404).json({ message: 'File not found' });

        //if file found delete that file
          }else{
            await Files.deleteOne({
                file:myfile.file,
            });
            console.log('file deleted successfully');
          }

        res.redirect('/');
    }