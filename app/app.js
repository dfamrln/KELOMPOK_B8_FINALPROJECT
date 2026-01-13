const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const db = require('./models');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', todoRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.APP_PORT || 2562;
app.listen(PORT, () => {
    console.log(`✓ Server berjalan di port ${PORT}`);
});