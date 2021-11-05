import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Test from './components/Test'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </div>
  );
}

export default App;