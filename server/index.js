// index.js (o el archivo principal que uses)
import express from "express";
import recieveMessage from "./api/message.js"; // importa el archivo message.js

const app = express();
const port = 3000;

// Usar el router para la ruta "/api/message"
app.post("/api/message", async (req, res) =>{
  const { mensaje } = req.body;
  await recieveMessage(mensaje,res);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
export default app;