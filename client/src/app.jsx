import './assets/css/stles.css';
import PaymentForm from './components/PaymentForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Gateway de Pagamento</h1>
      <PaymentForm />
      <ToastContainer />
    </>
  );
}

export default App;
