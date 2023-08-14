import React, { useState } from "react";

export default function Text1(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        // console.log(text);
    }
    const handleLcClick = ()=>{
        // console.log("lower was clicked " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        // console.log(text);
    }
    const handleClsClick = ()=>{
        // console.log("clear was clicked " + text);
        setText("");
        // console.log(text);
    }

    const handleOnchange = (event)=>{
        console.log("on change fire");
        console.log(event);
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return(
        <>
        <div >
            <h3>{props.heading}</h3>
            <div className="mb-3 ">
                <textarea className="form-control" id="text1" value={text} onChange={handleOnchange} rows="7"></textarea>
            </div> 
            <div className="container">
                <button  className="btn btn-primary mx-1" onClick={handleUpClick}>Convert into Uppercase</button>
                <button  className="btn btn-primary mx-1" onClick={handleLcClick}>Convert into Lowercase</button>
                <button  className="btn btn-primary mx-1" onClick={handleClsClick}>Clear Text</button>
                
            </div>
        </div>
        <div className="container" >
            <h3>Your Text summary </h3>
            <p>{text.split(" ").length} words and {text.length} of Characters</p>
            {/* <p>text split is {text.split(" ")}</p> */}
            <p>{0.008 * text.split(" ").length} Minutes for read this text</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>
        </>
    );


}