import logo from './logo.svg';
import './App.css';

// import Welcome, { WelcomeH2, WelcomeH3 } from './Welcome.js'
import { WelcomeH2, WelcomeH3 } from './Welcome.js'

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <WelcomeH2 />
      <WelcomeH3 />
    </div>
  );
}

export default App;
