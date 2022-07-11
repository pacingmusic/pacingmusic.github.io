import './App.scss';
import Homepage from "./Homepage";
import Secrets from "./components/Secrets/Secrets";
import DesktopDecor from "./components/DesktopDecor/DesktopDecor";
import ReactGA from 'react-ga';
import { HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {

    const TRACKING_ID = "UA-149504089-2";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");

  return (
    <div className="App">
        <nav className="App-header">
            <Link to={'/'} className={"header-item"}>
                😈  hello world
            </Link>

            <span className={"header-item marquee"}>
              <a href={'/#/angst'}>
                  send me your deepest insecurities
              </a>
          </span>

        </nav>
        <div className={'App-body'}>
            <Routes>
                <Route exact path="/" element={<Homepage/>} />
                <Route path="/angst" element={<Secrets/>} />

                {/*<Route exact path="/">*/}
                    {/*<Homepage/>*/}
                {/*</Route>*/}
                {/*<Route path="/angst">*/}
                    {/*<Secrets/>*/}
                {/*</Route>*/}
            </Routes>
            <DesktopDecor/>
        </div>
    </div>
  );
}

export default App;
