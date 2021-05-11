const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);

  if (!name || !course | !score) {
    res.status(400).json({ error: 'Must include the name, course, and score' });
  } else if (!Number.isInteger(score) || score < 1 || score > 100) {
    res.status(400).json({ error: 'Score must be an integer number between 1 and 100' });
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
      returning *
    `;

    const params = [name, course, score];

    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];

        res.status(201).json(grade);
      })

      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
