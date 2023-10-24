import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function Text1(props) {
    
    // for uppercase
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        // console.log(text);
    }

    // for lowercase
    const handleLcClick = ()=>{
        // console.log("lower was clicked " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        // console.log(text);
    }

    // for clear text area 
    const handleClsClick = ()=>{
        // console.log("clear was clicked " + text);
        setText("");
        // console.log(text);
    }
    // live change value of text
    const handleOnchange = (event)=>{
        // console.log("on change fire");
        // console.log(event);
        setText(event.target.value);
    }

    // for first char uppercase
    const handleFuprCaseClick = ()=> {

        const mySentence = text;
        const words = mySentence.split(" ");
        
        for (var  i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);         
        }
        console.log(words)
        let ans = words.join(" ");
        console.log(ans);
        setText(ans);

    }
    // for copy text 
    const handlecopyClick = ()=> {
        // console.log("I am a copy!");
        var wording = document.getElementById("mybox");
        wording.select();
        // text1.setSelectionRange(0,9999);
        navigator.clipboard.writeText(wording.value);
    }

    //Remove extra spaces
    const handleextrasapces = ()=> {
        // console.log("I am a handleremoveextraspaces!");
        //usinig regx in js 
        let neewtext =  text.split(/[ ]+/);
        // console.log(neewtext);
        // console.log(neewtext.join(" "));
        setText(neewtext.join(" "));
    }


    const [text,setText] = useState(''); // using use state hook 
    return(
        <>  {/* using a fregment b'cos more  component return at once*/}
        <div >
            <h3 style={{color : props.mode === 'dark'? 'white':'black'}}>{props.heading}</h3> {/* 2 curly braces esleai hai kyuke javascript mai object lekh rahe hai */}
            <div className="mb-3 ">
                <textarea className="form-control" id="mybox" value={text} style={ {backgroundColor: props.mode === 'dark'? '#042743':'white' , color : props.mode === 'dark'? 'white':'black' }  } onChange={handleOnchange} rows="7"></textarea>  {/* onChange bcos user(client type something in it )*/}
            </div> 
            <div className="container" >
                <button  className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert into Uppercase</button>
                <button  className="btn btn-primary mx-2 my-1" onClick={handleLcClick}>Convert into Lowercase</button>
                <button  className="btn btn-primary mx-2 my-1" onClick={handleClsClick}>Clear Text</button>
                <button  className="btn btn-primary mx-2 my-1" onClick={handleFuprCaseClick}>First Uppercase</button>
                <button  className="btn btn-primary mx-2 my-1" onClick={handlecopyClick}>Copy Text</button>
                <button  className="btn btn-primary mx-2 my-1" onClick={handleextrasapces}>Remove Extra Spaces</button>
                
            </div>
        </div>
        <div className="container my-" style={{color : props.mode === 'dark'? 'white':'black'}}>
            <h3>Your Text summary </h3>
            {/* <p>{(text == "") ? "&{text.split(" ").length} words and &{text.length} of Characters": ({text.split(" ").length} words and {text.length} of Characters)</p> */}
            <p>{text.split(" ").length} words and {text.length} of Characters</p>
            {/* <p>text split is {text.split(" ")}</p> */}
            <p>{0.008 * text.split(" ").length} Minutes for read this text</p>
            <h4><p>Preview</p></h4>
            <p>{text.length>0?text:"Enter something in the above to preview here"}</p>
        </div>
        </>
    );


}