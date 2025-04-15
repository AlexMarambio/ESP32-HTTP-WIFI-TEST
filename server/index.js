import express from "express";
import recieveMessage from "./api/message.js";

const app = express();
const port = 3000;

let messages = [];

app.use(express.json()); // Necesario para leer el body JSON

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.status(200).json({ hola: "mundo", messages });
});

// Ruta POST para recibir mensajes
app.post("/api/message", (req,res) => {
  recieveMessage(req,res);
  messages.push(req.mensaje);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});

export default app;
