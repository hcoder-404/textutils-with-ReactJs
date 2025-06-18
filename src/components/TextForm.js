import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On change was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("Hey Harsh");
    return (
        <>
        <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" placeholder='Enter your text here'></textarea>
            </div>
            <button className='btn  btn-primary me-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn  btn-primary me-2' onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>    
            <p>{text.split(" ").length} words,  {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        
        </>
  ) 
}
