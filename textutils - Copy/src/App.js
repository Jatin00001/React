import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Text1 from './component/Text1';

function App() {

  const[mode,setmode] = useState("light");
  
  const toggleMode = ()=>{
    if(mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="Textutils" About="About us"  mode = {mode} toggleMode={toggleMode}  />

    <div className="container my-3">
      <Text1 heading = "Enter The Text To Analyze Below " mode = {mode}/>
    </div>
    {/* <div className="container">
      <About/>
    </div> */}
    </>
  );
}

export default App;
