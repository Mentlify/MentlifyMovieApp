import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/Routes/AppRouter';
import './index.css';

function App() {
  return ( 
  <BrowserRouter>   
   <AppRouter />
    </BrowserRouter>
  );
}

export default App;