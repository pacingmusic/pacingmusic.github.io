import './App.scss';
import Homepage from "./Homepage";
import Secrets from "./components/Secrets/Secrets";
import DesktopDecor from "./components/DesktopDecor/DesktopDecor";
import ReactGA from 'react-ga';
import Countdown from 'react-countdown';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {

    const TRACKING_ID = "UA-149504089-2";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");

  return (
    <div className="App">
      <Router>
          <nav className="App-header">
              <Link to={'/'} className={"header-item"}>
                  😈  hello world
              </Link>

              <span className={"header-item marquee"}>
              <a href={'/angst'}>
                  send me your deepest insecurities
              </a>
          </span>

              <span className={"header-item countdown"}>
              <Countdown date={'2022-05-13T01:00:00'}/>
          </span>

          </nav>
          <div className={'App-body'}>
              <Routes>
                  <Route path="/" element={<Homepage />}></Route>
                  <Route path="/angst" element={<Secrets />}></Route>
              </Routes>
              <DesktopDecor/>
          </div>
      </Router>
    </div>
  );
}

export default App;
