import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Text1 from './component/Text1';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const[mode,setmode] = useState("light");
  const[alert,setalert] = useState(null);

  const showalert = (type,message) => {
    setalert({
      msg:message,
      type:type
    });
    setTimeout(()=>{setalert(null);} , 1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light') {
      setmode('dark');
      showalert("success","Enable dark mode");
      document.body.style.backgroundColor = '#042743';
      // we change title but we don't want for now but for dev we did
      document.title = "TextUtils - Dark mode enable";
      // // for fun 
      // setInterval(()=>{
      //   document.title = "Textutils is Amazing";
      // },1500);
      // setInterval(()=>{
      //   document.title = "TextUtils install now";
      // },1200)
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("success","Enable light mode");
      // we change title but we don't want for now but for dev we did
      document.title = "TextUtils - light mode enable";
    }
  }

  return (
    <>
    <Router>
    <Navbar title="Textutils" About="About us"  mode = {mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
      {/* /user --- component - 1
          /user/home -- component -2 but this both two are different but react check partial thats why we use exact path
      
      */}
        <Route exact path='/about'element = {<About showalert={showalert} mode = {mode} />} />
        <Route exact path='/home' element = {<Text1 heading = "Enter The Text To Analyze Below " showalert={showalert} mode = {mode} /> } />
        {/* <Route path='/'>
          />
        </Route> */}
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
