import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Student from './Student';

function App() {
  //  single line 
  /*
  multi line 
  */
  {/*<Parent></Parent> */}  //JSX Comments
  
  return (
    <div className="App">
     {<Parent></Parent> }
     <hr/>
     <Student></Student>
    </div>
  );
}

export default App;