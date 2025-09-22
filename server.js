// server.js
const express = require('express');
const app = express();
app.use(express.json());
const taskRoutes = require('./routes/taskRoutes');
const PORT = 3000;
app.use('/api/v1/tasks',taskRoutes);
// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
