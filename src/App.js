
import { useState,useEffect } from 'react';
import './App.css';
import Data from './Assets/Data';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';

function App() {
  const [counter, setCounter] = useState(0);
 const [data, setData] = useState(Data);
 const [search, setSearch] = useState("");
 const [show, setShow] = useState(false);
 const handleShow = () => {
  return setShow(!show)
 }
 console.log(show)
  return (
    <div className="App">
      <button onClick={()=>setCounter(counter+1)}>+</button>
      {counter}
      <button onClick={()=>setCounter(counter>0?counter-1:counter)}>-</button>
      <Navigation setSearch={setSearch} handleShow={handleShow} show={show}/>
      <MovieList data={data} search={search}/>
    </div>
  );
}

export default App;
