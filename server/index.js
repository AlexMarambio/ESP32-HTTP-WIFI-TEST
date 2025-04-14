import express from "express";
import messageRouter from "./api/message.js"; // Asegúrate de tener la extensión si usas módulos ES

const app = express();
const port = 3000;

// Middleware para recibir JSON
app.use(express.json());

// Ruta principal para probar que el servidor funciona
app.get("/", (req, res) => {
  res.status(200).json({ hola: "mundo" });
});

// Usar el router para la ruta "/api/message"
app.use("/api/message", messageRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`✅ API escuchando en http://localhost:${port}`);
});
