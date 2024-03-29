/* Hooks */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Components */
import { Header } from "../../global/components/HeaderComponent/header";
import { HomePage } from "./HomePage/Homepage";
import { Author } from "./AuthorComponent/Author";
import { Reviewer } from "./ReviewerComponent/Reviewer";
import { Footer } from "../../global/components/FooterComponent/footer";
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
      <Footer />
    </>
  )
}

export default App
