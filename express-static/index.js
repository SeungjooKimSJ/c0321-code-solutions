const express = require('express');
const path = require('path');

const app = express();

const joinPublicPath = path.join(__dirname, 'public');

const staticMiddleware = express.static(joinPublicPath);

app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
