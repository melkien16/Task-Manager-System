const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const errorHandler = require('./middlewares/errore.middleware');

const app = express();

// allow all cross-origin requests
app.use(cors());
app.use(express.json());

// Catch errors from anywhere
app.use(errorHandler);

//some data for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Task Management API' });
});

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

module.exports = app;
