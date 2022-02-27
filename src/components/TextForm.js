import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    //setText("New TExt");
    const handleUpClick = () => {
        //console.log("Function up clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase ", "success");
        
    }
    const handleLoClick = () => {
        //console.log("Function up clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase ", "success");
    }
    const handleOnChange = (event) => {
        //console.log("Function Onchange");
        setText(event.target.value);
    }
    const clear = () => {
        //console.log("Function Onchange");
        setText('');
        props.showAlert("Text cleared ", "success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard", "success");
    }
    const removeSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces Removed", "success");
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleLoClick}>Convert To Lower-Case</button>
                <button className="btn btn-primary mx-3 my-2" onClick={clear}>Clear Text</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-2" onClick={removeSpaces}>Remove Spaces</button>

            </div>
            <div className="container my-2">
                <h2>Text Summary</h2>
                <p > {(text.split(" ").length)} Words and {text.length - ' '} Charactes</p>
                <h2>Preview</h2>
               
                <div className="preview">{text}<br />
                </div>

            </div>
        </>
    )
}
