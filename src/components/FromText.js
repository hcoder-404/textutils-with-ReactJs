import React, {useState} from 'react';
import PropTypes from 'prop-types'



export default function FromText(props){
    const UpperCaseText = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }
    const LowerCaseText = () => {
        let newText = text.toLowerCase();
        setText(newText);   
        props.showAlert("Text converted to lowercase", "success");
    }

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const RemoveText = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const CopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }


    const handleOnChange = (e) => {
        setText(e.target.value);
    }   

    const [text, setText] =useState("");
    return(
        <>
        <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Enter the text to analyze below</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder='Enter your text here' id="textArea" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={UpperCaseText}>Convert to Uppercase</button>
            
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={LowerCaseText}>Convert to Lowercase</button>
            
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
            
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={RemoveText}>Clear Text</button>
                        
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={CopyText}>Copy Text</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length } words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}