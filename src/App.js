import './App.scss';
import Homepage from "./Homepage";
import Secrets2 from "./components/Secrets2/Secrets2";
import DesktopDecor from "./components/DesktopDecor/DesktopDecor";
import ReactGA from 'react-ga';
import { HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {

    const TRACKING_ID = "UA-149504089-2";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");

  return (
    <div className="App">
        <div className={'App-body'}>
            <Routes>
                <Route exact path="/" element={<Homepage/>} />
                <Route path="/anxiety" element={<Secrets2/>} />

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
