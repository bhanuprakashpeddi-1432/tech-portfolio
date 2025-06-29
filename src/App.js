import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Skills />
              <Projects />
              <About />
            </>
          } />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;