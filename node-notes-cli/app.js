const fs = require('fs');
const data = require('./data.json');

/*User can read their notes*/
for (const key in data.notes) {
  if (process.argv[2] === 'read') {
    console.log(`${key}: ${data.notes[key]}`);
  }
}
