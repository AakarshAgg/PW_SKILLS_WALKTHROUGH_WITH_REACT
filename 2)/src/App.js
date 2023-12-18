import Button from './Button';
import './App.css';

function App() {
  let data ="click me"

  function callme(){
  data="you clicked me"
}
  return (
    <div className="App">
      <Button text={data} onClick={callme}/>
    </div>
  );
}




export default App;
