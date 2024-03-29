/* Hooks */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
/* Components */
import { Header } from "../../global/components/HeaderComponent/header";
import { HomePage } from "./HomePage/Homepage";
import { Author } from "./AuthorComponent/Author";
import { Marketplace } from "./MarketplaceComponent/marketplace";
import { Reviewer } from "./ReviewerComponent/Reviewer";
import { Footer } from "../../global/components/FooterComponent/footer";
/* Styles */
import './styles/styles.css'

function App() {
  const [disable, setDisable] = useState(false);

  return (
    <>
    {
      !disable ? (
        <>
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage toggleState={setDisable} />} />
              <Route path="/author" element={<Author />} />
              <Route path="/reviewer" element={<Reviewer />} />
              <Route path="/marketplace" element={<Marketplace toggleState={setDisable}  />} />
            </Routes>
          </Router>
          <Footer />
        </>
      ) : (
       <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage toggleState={setDisable} />} />
            <Route path="/author" element={<Author />} />
            <Route path="/reviewer" element={<Reviewer />} />
            <Route path="/marketplace" element={<Marketplace toggleState={setDisable}  />} />
          </Routes>
        </Router>
       </> 
      )
    }
    </>
  )
}

export default App
