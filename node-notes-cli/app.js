const fs = require('fs');
const data = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

if (process.argv[2] === 'create') {
  const key = data.nextId;

  data.notes[key] = process.argv[3];
  data.nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'delete') {
  const key = process.argv[3];

  delete data.notes[key];

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'update') {
  const key = process.argv[3];

  data.notes[key] = process.argv[4];

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}
