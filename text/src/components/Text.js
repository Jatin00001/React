import React ,{useState} from 'react'


export default function Text() {
    const handleOnchange = (event)=>{
        console.log("on change fire");
        console.log(event);
        setText(event.target.value);
    }
    const handleupchange = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowerchange = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const change = ()=> {
        setText("");
    }

    const handlechange = ()=>{
        let string = text;
        setText(string[0].toUpperCase() + string.slice(1));
    }


    const [text,setText] = useState('');
  return (
    <>
    <div className="mb-3 container">
        <div className="mb-3">
            <textarea className="form-control" id="text1" value={text} onChange={handleOnchange} rows="4"></textarea>
        </div>
    </div>
    <div className="container">
        <button className="btn btn-primary mx-1 my-1" onClick={handleupchange} >Convert into Upper case.</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerchange} >Convert into Lower case.</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlechange} >Convert first Upper case.</button>
        <button className="btn btn-primary mx-1 my-1" onClick={change} >Clear</button>
    </div>
    </>
            
        
  )
}
