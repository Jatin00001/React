import React, { useState } from "react";

export default function Text1(props) {
    
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        // console.log(text);
    }
    const handleOnchange = (event)=>{
        console.log("on change fire");
        console.log(event);
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter the Text here !');
    return(
            <div>
                <h3>{props.heading}</h3>
                <div className="mb-3 ">
                    <textarea className="form-control" id="text1" value={text} onChange={handleOnchange} rows="7"></textarea>
                </div> 
                <button  className="btn btn-primary" onClick={handleUpClick}>Convert into Uppercase</button>
            </div>
    );


}