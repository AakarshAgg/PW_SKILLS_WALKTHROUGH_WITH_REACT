import List from './List';
import './App.css';

function App() {

  let arr=["apple","mango","banana"]

  return (
    <div className="App">
      <ul>
        {
          arr.map((elem,ind,arr)=>{
             return <List items={elem}/>
          })
        }
      </ul>
    </div>
  );
}




export default App;
