import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function About(props) {

  // object with usetate its possible like this 
  // const [myStyle,setMystyle] = useState({ // this is default state
  //   color:'grey',
  //   backgroundColor:'white'
  //   // border : '2px solid white'
  // })


  // const [btnText,setBtnText] = useState("Enable Dark mode")

  // const togglestyle = ()=>{
  //   // console.log("enter ")

  //   // if(myStyle.color === 'grey' || (myStyle.color === 'black') ){
  //   if(myStyle.color === 'grey'){
  //      setMystyle({
  //       color:'white',
  //       backgroundColor:'grey'
  //       // border : '1px solid white'
  //      });
  //      setBtnText("Enable Light mode");
  //   }
  //   else{
  //     setMystyle({
  //       color:'grey',
  //       backgroundColor:'white'
  //     });
  //     setBtnText("Enable Dark mode");      
  //   }

  // }
  // this is object in javascript
  // let myStyle = {
  //   color:'black',
  //   backgroundColor:'white',
  //   border:'2px solid red',
  //   height:'100vh',
  //   width :'100vw'
  // }
  // doller zero we use in google chrome inspect mode current element automatic le lena hai   $0.style.backgroundColor like this 
  return(
    <div className="container my-3"  >
      <h1 style={{color : props.mode === 'dark'? 'white':'black'}} >About</h1>
      <div className="container my-3"  >
        <div className="accordion my-2"  id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " >
              <button className="accordion-button" style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black'  }  }  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
              <div className="accordion-body" style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black' }  }>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item my-2" >
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black' }  } type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black' }  }  data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header" >
              <button className="accordion-button collapsed"  style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black' }  } type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"  style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black' }  } data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

       
      </div>
      <div className='container'>

        {/* <button className="btn btn-primary " onClick={togglestyle}>{btnText}</button> */}
        {/* <button className="btn btn-primary " >{btnText}</button> */}
      </div>
    </div>
    
  );


}


