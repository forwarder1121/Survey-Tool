import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateForm from './pages/CreateForm'
import PreviewForm from './pages/PreviewForm'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form/create" element={<CreateForm />} />
        <Route path="/form/preview" element={<PreviewForm />} />
      </Routes>
    </div>
  );
}

export default App;