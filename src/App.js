import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateForm from './pages/CreateForm'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form/:action" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;