const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Recibir mensaje
app.post('/message', (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'Mensaje no recibido' });
  }

  console.log('📨 Mensaje recibido desde el ESP32:', mensaje);

  res.status(200).json({ status: 'ok', recibido: true });
});

// Ruta GET opcional para probar que el servidor funciona
app.get('/', (req, res) => {
  res.status(200).json({ Hola: 'mundo' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
