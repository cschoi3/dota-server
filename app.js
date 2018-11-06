const express = require('express');
var bodyParser = require('body-parser')

const app = express();

const initializeDatabases = require('./dbs');
const routes = require('./routes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

initializeDatabases()
  .then((dbs) => {
    // Initialize the application once database connections are ready.
    routes(app, dbs).listen(3000, () => console.log('Listening on port 3000'));
  })
  .catch((err) => {
    console.error('Failed to make all database connections!');
    console.error(err);
    process.exit(1);
  });
