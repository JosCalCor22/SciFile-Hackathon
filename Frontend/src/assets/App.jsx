/* Hooks */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/* Components */
import { Header } from "../../global/components/HeaderComponent/header";
import { HomePage } from "./HomePage/Homepage";
import { Author } from "./AuthorComponent/Author";
import { Reviewer } from "./ReviewerComponent/Reviewer";
/* Styles */
import './styles/styles.css'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/author" element={<Author />} />
          <Route path="/reviewer" element={<Reviewer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
