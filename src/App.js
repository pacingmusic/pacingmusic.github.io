import './App.scss';
import Homepage from "./Homepage";
import DesktopDecor from "./components/DesktopDecor/DesktopDecor";
import ReactGA from 'react-ga';
import Countdown from 'react-countdown';

function App() {

    const TRACKING_ID = "UA-149504089-2";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");

  return (
    <div className="App">
      <header className="App-header">
          <span className={"header-item"}>😈</span>
          <span className={"header-item"}>hello world</span>

          <span className={"header-item countdown"}>
              <Countdown date={'2022-05-13T01:00:00'}/>
          </span>

      </header>
        <div className={'App-body'}>
            <Homepage/>
            <DesktopDecor/>
        </div>
    </div>
  );
}

export default App;
