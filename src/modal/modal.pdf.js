const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PDFDetail" }
);

const PDF = mongoose.model("PDFDetail", PdfSchema);
module.exports = PDF;