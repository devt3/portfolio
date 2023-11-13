import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import initialT from "./assets/initialT.svg";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/projects" Component={Projects} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
