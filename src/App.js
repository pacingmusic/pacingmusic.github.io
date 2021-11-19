import './App.scss';
import Homepage from "./Homepage";
import DesktopDecor from "./components/DesktopDecor/DesktopDecor";
import ReactGA from 'react-ga';

function App() {

    const TRACKING_ID = "G-G9TRLP72XN";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");

  return (
    <div className="App">
      <header className="App-header">
          <span className={"header-item"}>😈</span>
          <span className={"header-item"}>hello world</span>
      </header>
        <div className={'App-body'}>
            <Homepage/>
            <DesktopDecor/>
        </div>
    </div>
  );
}

export default App;
