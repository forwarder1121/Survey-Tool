import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FormPage from './components/FormPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/formPage" element={<FormPage />}/>
      </Routes>
    </div>
  );
}

export default App;