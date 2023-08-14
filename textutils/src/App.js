import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Text1 from './component/Text1';

function App() {
  return (
    <>
    {/* <Navbar title="Textutils" About="About us"  />
    </> */}
    <Navbar title="Textutils" />
    <div className="container my-3">
      <Text1 heading = "Enter the text to analyze below "/>
    </div>
    <div className="container">
      <About/>
    </div>
    </>
  );
}

export default App;
