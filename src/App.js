import './App.css';
import Activities from './Components/Activities/Activities';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Questions from './Components/Questions/Questions';


function App() {
  return (
    <div>
      <Activities></Activities>
      <ToastContainer></ToastContainer>
      <Questions></Questions>
    </div>
  );
}

export default App;
