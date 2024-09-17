const multer = require("multer");
const PDF = require("../modal/modal.pdf");

const upload = async (title, fileName) => {
  try{
    const response = await PDF.create({ title: title, pdf: fileName});
    return response;
  }catch(error){
    throw error
  }
}

const getFiles = async () =>{
  try{
    const files = await PDF.find();
    return files;
  }catch(error){
    throw error
  }
}

module.exports = {
  upload, getFiles
};
