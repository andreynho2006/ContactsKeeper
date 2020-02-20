const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

const app = express();
app.use(cors()); // Use this after the variable declaration
// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.res(_dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
