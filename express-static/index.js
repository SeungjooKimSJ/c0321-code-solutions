const express = require('express');
const path = require('path');

const app = express();

const pathJoin = path.join(__dirname, 'public');

const staticMiddleware = express.static(pathJoin);

app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
