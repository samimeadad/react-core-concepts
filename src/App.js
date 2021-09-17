import logo from './logo.svg';
import './App.css';

function App () {
  const number = 555;

  const singer = {
    name: 'Dr. Mahfuz',
    job: 'singer'
  };

  const evaRahman = {
    name: 'Eva Rahman',
    job: 'Kokil Konthi Gaan Eer Pakhi'
  };

  const evaRahmanStyle = {
    backgroundColor: 'red',
    padding: '20px',
    color: 'white',
    borderRadius: '20px'
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Yo Yo React Mama!!! Tomare Ami Paisi!!!</h2>
        <p>Happy Happy React Day!!!</p>

        <div className="container">
          <h3>This is inside my Container</h3>
          <p>My favorite number: {number}</p>
          <p>My favorite singer: {singer.name}</p>
          <p style={evaRahmanStyle}>Real Singer: {evaRahman.job}</p>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Youtube
        </a>
      </header>
    </div>
  );
}

export default App;
