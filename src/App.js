import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Survey';
import SurveyList from './pages/SurveyList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/List" element={<SurveyList/>} />
      </Routes>
     
    </Router>
  );
}

export default App;
