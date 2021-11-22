const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');

const app = express();
const port = 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(port, () => {
  console.log('Server running successfully');
})