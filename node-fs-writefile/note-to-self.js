const fs = require('fs');

const myNote = process.argv[2];

fs.writeFile('note.txt', myNote.toString() + '\n', 'utf8', err => {
  if (err) throw err;
});
