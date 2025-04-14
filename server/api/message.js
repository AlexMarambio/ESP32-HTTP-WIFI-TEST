// /api/message.js
import express from "express";
const router = express.Router();

// Middleware para manejar JSON
router.use(express.json());

// Recibir mensaje
router.post('/', (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'Mensaje no recibido' });
  }

  console.log('📨 Mensaje recibido:', mensaje);

  res.status(200).json({ recibido: true });
});

export default router;
