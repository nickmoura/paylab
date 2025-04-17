import { useState } from 'react';
import { toast } from 'react-toastify';

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    validade: '',
    cvv: '',
    valor: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/pagar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.sucesso) {
      toast.success(data.mensagem);
    } else {
      toast.error(data.mensagem);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome no cartão" onChange={handleChange} required />
      <input name="numero" placeholder="Número do cartão" onChange={handleChange} required />
      <input name="validade" placeholder="Validade (MM/AA)" onChange={handleChange} required />
      <input name="cvv" placeholder="CVV" onChange={handleChange} required />
      <input name="valor" placeholder="Valor" type="number" onChange={handleChange} required />
      <button type="submit">Pagar</button>
    </form>
  );
}
