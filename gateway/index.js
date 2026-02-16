const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({ service: 'Gateway funcionando' });
});

app.listen(3000, () => {
  console.log('Gateway rodando na porta 3000');
});
