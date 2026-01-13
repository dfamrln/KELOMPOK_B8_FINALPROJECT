const express = require('express');

console.log('🚀 [STARTUP] Loading modules...');

// Load routes
console.log('📁 [STARTUP] Loading routes from ./routes/todoRouter');
const todoRoutes = require('./routes/todoRouter');
console.log('✓ [STARTUP] Routes loaded successfully');

// Load models
console.log('📁 [STARTUP] Loading models from ./models');
const db = require('./models');
console.log('✓ [STARTUP] Models loaded successfully');

const app = express();
console.log('✓ [STARTUP] Express app initialized');

// Middleware
app.use(express.json());
console.log('✓ [MIDDLEWARE] JSON parser registered');

// Routes
app.use('/api', todoRoutes);
console.log('✓ [ROUTES] API routes registered at /api');

// Root endpoint
app.get('/', (req, res) => {
    console.log('📥 [REQUEST] GET / - Root endpoint accessed');
    res.json({ message: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('❌ [ERROR] Unhandled error:', err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log('═══════════════════════════════════════');
    console.log('✓ [SERVER] Server started successfully!');
    console.log(`✓ [SERVER] Listening on port ${PORT}`);
    console.log(`✓ [SERVER] Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`✓ [SERVER] Database: ${process.env.DB_NAME || 'N/A'}`);
    console.log('═══════════════════════════════════════');
    console.log(`📍 Access API at: http://localhost:${PORT}`);
    console.log(`📍 Root endpoint: http://localhost:${PORT}/`);
    console.log(`📍 API endpoints: http://localhost:${PORT}/api/todos`);
    console.log('═══════════════════════════════════════');
});

// Log when app receives a request
app.use((req, res, next) => {
    console.log(`📥 [REQUEST] ${req.method} ${req.path}`);
    next();
});

// Catch startup errors
process.on('uncaughtException', (err) => {
    console.error('💥 [FATAL] Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('💥 [FATAL] Unhandled Rejection:', err);
    process.exit(1);
});

console.log('✓ [STARTUP] App configuration complete');