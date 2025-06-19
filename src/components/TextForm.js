import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("convert to uppercase !", "success");
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("convert to Lowercase !", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared !", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change was clicked");
        setText(event.target.value);
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");   
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard !", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));         
        props.showAlert("Extra spaces Removed !", "success");
    }

    const [text, setText] = useState("");
    // setText("Hey Harsh");
    return (   
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'rgb(4, 39, 67)'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'rgb(4, 39, 67)'}} id="myBox" rows="8" placeholder='Enter your text here'></textarea>
            </div>
            <button className='btn  btn-primary me-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn  btn-primary me-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn  btn-primary me-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn  btn-primary me-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn  btn-primary me-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2"  style={{color: props.mode === 'dark'?'white':'rgb(4, 39, 67)'}} >
            <h2>Your text summary</h2>    
            <p>{text.split(" ").length} words,  {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>

        
        </>
  ) 
}
