const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/pagar', (req, res) => {
  const { nome, numero, validade, cvv, valor } = req.body;

  // Simulação básica de "validação"
  if (!nome || !numero || !validade || !cvv || !valor) {
    return res.status(400).json({ sucesso: false, mensagem: 'Preencha todos os campos.' });
  }

  if (valor > 100) {
    return res.status(200).json({ sucesso: false, mensagem: 'Pagamento recusado. Valor muito alto.' });
  }

  res.json({ sucesso: true, mensagem: 'Pagamento aprovado!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
