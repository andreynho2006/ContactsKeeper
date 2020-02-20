const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();
app.use(cors()); // Use this after the variable declaration
// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the contact keeper API' })
);

// define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
