var fs = require('fs')
var PdfReader = require('pdfreader').PdfReader;

fs.readFile('./pdf.pdf', (err, file) => {
  if (err) throw err;
  new PdfReader().parseBuffer(file, (errr, item) => {
    if (errr)
      throw errr;
    else if (!item)
      console.log('');
    else if (item.text)
      console.log(item.text);

  })
}) 