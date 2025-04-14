import express from "express";
import recieveMessage from "./api/message.js";

const app = express();
const port = 3000;

app.use(express.json()); // Necesario para leer el body JSON

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.status(200).json({ hola: "mundo" });
});

// Ruta POST para recibir mensajes
app.post("/api/message", recieveMessage);

app.listen(port, () => {
  console.log(`✅ API escuchando en http://localhost:${port}`);
});

export default app;
