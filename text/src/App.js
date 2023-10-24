import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";

function App() {
  return (
    <>

      <Navbar title="ReactApplication" about="About Us" contact="Contact us"/>  
      {/* <Navbar />   */}
      <Text />
    </>
  );
}

export default App;
