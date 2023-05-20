// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import QuizEditor from './components/QuizEditor';
import QuizEntry from './components/QuizEntry';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Quiz App!</h1>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/edit" element={<QuizEditor />} />
          <Route path="/" element={<QuizEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
