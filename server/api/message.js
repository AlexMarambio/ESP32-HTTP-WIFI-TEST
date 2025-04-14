// Recibir mensaje
const recieveMessage = (req, res) => {

  if (!req) {
    return res.status(400).json({ error: 'Mensaje no recibido' });
  }

  console.log('📨 Mensaje recibido:', req);

  res.status(200).json({ recibido: true });
};

export default recieveMessage;
