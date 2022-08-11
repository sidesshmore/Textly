import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCopyClick = () => {
        console.log("Copy text was clicked");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
        // setText(newText)
    }
    const handleClearClick = () => {
        console.log("Clear text was clicked");
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared.", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode === `dark`?`white`:`black`}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === `dark`?`light`:`dark`}} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                {/* <button className="btn btn-primary my-1 mx-2" onClick={handleTitleClick}>Convert to Titlecase</button> */}
                <button className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode === `dark`?`white`:`black`}}>
                <h2>Your text summary</h2>
                <p> {text.split("").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above TextBox to preview it here"}</p>

            </div>
        </>

    )
}
