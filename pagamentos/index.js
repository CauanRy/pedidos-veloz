const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({ service: 'Pedidos funcionando' });
});

app.listen(3000, () => {
  console.log('Pedidos rodando na porta 3000');
});
