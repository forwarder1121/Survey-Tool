import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FormPage from './components/FormPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/formPage" element={<FormPage />}/>
      </Routes>
    </div>
  );
}

export default App;