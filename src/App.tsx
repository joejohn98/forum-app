import "./App.css";
import { QuestionsProvider } from "./context/QuestionsContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsList from "./pages/QuestionsList";
import Home from "./pages/Home";
import Answer from "./pages/Answer";

function App() {
  return (
    <>
      <QuestionsProvider>
        <Router>
          <div className="container mx-auto p-4 font-[Arial]">
            <nav className="bg-blue-500 p-4 rounded-md">
              <ul className="flex space-x-4 text-white">
                <li>
                  <Link to="/"> Home</Link>
                </li>

                <li>
                  <Link to="/questions"> Questions List</Link>
                </li>

                <li>
                  <Link to="/about"> About</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<QuestionsList />} />
              <Route path="/answer/:id" element={<Answer />} />
              
            </Routes>
          </div>
        </Router>
      </QuestionsProvider>
    </>
  );
}

export default App;
