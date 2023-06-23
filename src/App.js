import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./About";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="main-content">
          <Switch>
            <Route exact path = "/">
              <AboutMe/>
            </Route>
            <Route path = "/Resume">
              <Resume/>
            </Route>
            <Route>
              <Projects/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
