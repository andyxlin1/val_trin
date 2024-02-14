import './App.css';
import ValCard from "./components/ValCard";
import CalendarCard from "./components/CalendarCard";
import Final from "./components/Final";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ValCard />} /> 
          <Route path="/date" element={<CalendarCard />} />
          <Route path ="/final" element={<Final/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;