import logo from './logo.svg';
import './App.css';
import Flow from './Flow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flow2 from './Flow2';
import Flow3 from './Flow3';
import Flow5 from './Flow5';
import Divide from './Divide';
function App() {
  return (
    <Router>
    <div className="App">
    

      {/* <Notification message={weeklyMessage} /> */}
      

      <Routes>
        <Route path="/" element={<Flow2 />} />
      <Route path="/flow" element={<Flow />} />
      <Route path="/flow2" element={<Flow2 />} />
      <Route path="/flow3" element={<Flow3 />} />
      <Route path="/flow5" element={<Flow5 />} />
      <Route path="/divide" element={<Divide />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
