import './App.css';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='bg-slate-50'>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
