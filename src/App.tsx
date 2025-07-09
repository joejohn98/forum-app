
import './App.css'
import { QuestionsProvider } from './context/QuestionsContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <QuestionsProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Questions List</li>
              <li>About</li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/questions" element={} />
          </Routes>
        </div>
      </Router>
      </QuestionsProvider> 
    </>
  )
}

export default App
