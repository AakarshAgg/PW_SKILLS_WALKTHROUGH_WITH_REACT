import Header from './Header';
import './App.css';

function App() {
  let data ="I am learning react"

  return (
    <div className="App">
      <Header title={data}/>
    </div>
  );
}




export default App;
