const fs = require('fs');
const data = require('./data.json');

/* User can read their notes */
for (const key in data.notes) {
  if (process.argv[2] === 'read') {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

/* User can add a note */
if (process.argv[2] === 'create') {
  const key = data.nextId;

  data.notes[key] = process.argv[3];
  data.nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

/* User can delete a note */
if (process.argv[2] === 'delete') {
  const key = process.argv[3];

  delete data.notes[key];

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}
