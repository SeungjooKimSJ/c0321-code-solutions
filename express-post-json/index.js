const express = require('express');

let nextId = 1;
const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const arrOfGrades = [];

  for (const id in grades) {
    arrOfGrades.push(grades[id]);
  }
  res.json(arrOfGrades);
});

const jsonParsingMiddleware = express.json();

app.use(jsonParsingMiddleware);

app.post('/api/grades', (req, res) => {
  const id = nextId++;

  req.body.id = id;
  grades[id] = req.body;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
