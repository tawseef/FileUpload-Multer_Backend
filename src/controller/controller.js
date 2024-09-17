const { upload, getFiles } = require("../service/service")

const handleFileUpload = async (req,res) => {
  const title = req.body.title;
  const fileName = req.file.filename;
    
  const response = await upload(title, fileName);
  if(response) res.status(200).json(response);
  else res.status(400);
}

const handleGetFiles = async (req,res) => {
  const response = await getFiles();
  if(response) res.status(200).json(response);
  else res.status(400);
}

module.exports = { handleFileUpload, handleGetFiles };