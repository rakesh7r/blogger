const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://rakeshgandla200:mdG4VYgGBMtrQtWE@cluster0.qtotssa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected');
});

module.exports = { db };
