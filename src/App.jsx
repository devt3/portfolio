import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Projects from "./pages/Projects";
import PageNotFound from "./page_functions/PageNotFound";
import initialT from "./assets/initialT.svg";
import Navbar from "./Navbar";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router basename={import.meta.env.DEV ? "/" : "/portfolio/"}>
        <Navbar />
        <div className="mainroute">
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/profile" Component={Profile} />
            <Route path="/projects" Component={Projects} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
