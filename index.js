const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('hello world');
});

const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Server is listening at http://%s:%s', host, port);
});
