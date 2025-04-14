// index.js (o el archivo principal que uses)
import express from "express";
import messageRouter from "./api/message.js"; // importa el archivo message.js

const app = express();
const port = 3000;

// Usar el router para la ruta "/api/message"
app.use("/api/message", messageRouter);

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
export default app;