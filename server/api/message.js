// api/message.js
const recieveMessage = (req, res) => {
    const { mensaje } = req.body;
  
    if (!mensaje) {
      return res.status(400).json({ error: 'Mensaje no recibido' });
    }
  
    console.log('📨 Mensaje recibido:', mensaje);
  
    res.status(200).json({ recibido: true });
  };
  
  export default recieveMessage;
  