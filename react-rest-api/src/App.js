import logo from './logo.svg';
import './App.css';
import FetchDemo from './FetchDemo';
import AxiosDemo from './AxiosDemo';

function App() {
  return (
    <div className="App">
      <h2>Rest API using axios and fetch</h2>
      <FetchDemo></FetchDemo>
      <hr/>
      <AxiosDemo></AxiosDemo>
    </div>
  );
}

export default App;
