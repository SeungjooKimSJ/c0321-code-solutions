const fs = require('fs');

const anyFile = process.argv[2];

fs.readFile(anyFile, 'utf8', (err, text) => {
  if (err) {
    console.log(err);
  }
  console.log(text);
});
