import './App.css';
import ValCard from "./components/ValCard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ValCard />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;