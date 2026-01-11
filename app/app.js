const express = require('express');
const todoRoutes = require('./app/routes/todoRoutes');

const app = express();

app.use(express.json());

app.use('/api', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}/api/todos`);
});