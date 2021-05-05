// const fs = require('fs');
const data = require('./data.json');

const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  const notesArr = [];

  for (const key in data.notes) {
    notesArr.push(data.notes[key]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id] !== undefined) {
    res.json(data.notes[req.params.id]);
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
