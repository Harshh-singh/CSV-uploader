const File = require("../models/file_schema");

module.exports.home = async function(req,res){
    file = await File.find({});
    try{
        return res.render('homepage', {
            title: "csv-uploader",
            files: file
        });
    }catch(err){
        console.log(`Error in loading ${err}`);
    }

}