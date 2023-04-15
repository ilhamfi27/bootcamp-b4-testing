const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const errorHandling = require('./middleware/errorHandling');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB()

/**
 * routing
 */
const routesApiV1 = require('./routes/v1routes');

app.use('/api/v1', routesApiV1);
app
  .route('*')
  .get((req, res) => {
    res.send("you're inside fallback route");
  })
  .post((req, res) => {
    res.send("you're inside fallback route");
  })
  .put((req, res) => {
    res.send("you're inside fallback route");
  })
  .delete((req, res) => {
    res.send("you're inside fallback route");
  });
/**
 * error handling
 */
app.use(errorHandling);

app.listen(3000, () => {
  console.log('application listen on http://localhost:3000');
});
