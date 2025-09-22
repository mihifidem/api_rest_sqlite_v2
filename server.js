// server.js
const express = require('express');
const app = express();
app.use(express.json());
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes')
const PORT = 3000;
app.use('/api/v1/tasks',taskRoutes);
app.use('/api/v1/users',userRoutes);

// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
