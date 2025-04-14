export default async function handler(req, res) {
    // if (req.method === 'POST') {
    //   const { mensaje } = req.body;
  
    //   if (!mensaje) {
    //     return res.status(400).json({ error: 'Mensaje no recibido' });
    //   }
  
    //   console.log('📨 Mensaje recibido desde el ESP32:', mensaje);
  
    //   return res.status(200).json({ status: 'ok', recibido: true });
    // } else {
    //   res.status(405).json({ error: 'Método no permitido' });
    // }
    res.status(200).json({ Hola:"mundo" });
  }
  