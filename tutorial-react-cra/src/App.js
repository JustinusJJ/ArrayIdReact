import './App.css';
import { WelcomeH2 } from './Welcome.js'

function App() {
  return (
    <div className="App">
      <WelcomeH2 children="Welcome 1" />
      <WelcomeH2 children="Welcome 2" />
      <WelcomeH2>
        This is a Content
      </WelcomeH2>
    </div>
  );
}

export default App;
