const express = require('express');
const todoRoutes = require('./app/routes/todoRoutes');
const userRoutes = require('./app/routes/index');   // const index

const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);  // api todos
app.use('/api/users', userRoutes);  // api users

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});     // msg running

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});     // msg error

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}/api/todos`);
});