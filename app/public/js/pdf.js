const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

doc.image('C:/dgsc-app/app/images/pmcv.png', {
    fit: [250, 300],
    align: 'left',
    valign: 'center'
  });


doc.end();