const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/pagar', (req, res) => {
  const { nome, numero, validade, cvv, valor } = req.body;

  if (!nome || !numero || !validade || !cvv || !valor) {
    return res.json({ sucesso: false, mensagem: 'Preencha todos os campos!' });
  }

  // Aqui faria a integração real com gateway
  console.log('Recebido pagamento:', req.body);

  res.json({ sucesso: true, mensagem: 'Pagamento processado com sucesso!' });
});

app.listen(3000, () => {
  console.log('🚀 Backend rodando na porta 3000');
});
