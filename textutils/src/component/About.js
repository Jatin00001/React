import React,{useState} from 'react'


export default function About() {
  const [myStyle,setMystyle] = useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btnText,setBtnText] = useState("Enable dark mode")
  const handledarkClick = ()=>{
    console.log("enter ")
    if(myStyle.color === 'black'){
       setMystyle({
        color:'white',
        backgroundColor:'black'
       });
       setBtnText("Enable Light mode");
    }
    else{
      setMystyle({
        color:'black',
        backgroundColor:'white'
      });
      setBtnText("Enable Dark mode");      
    }

  }
  // let myStyle = {
  //   color:'black',
  //   backgroundColor:'white',
  //   border:'2px solid red',
  //   height:'100vh',
  //   width :'100vw'
  // }
  return(
    <div className="container my-3" style={myStyle} >
      <h1>About</h1>
      <div className="container"  >
        <button className="btn btn-primary" onClick={handledarkClick}>{btnText}</button>
      </div>
    </div>
    
  );


}