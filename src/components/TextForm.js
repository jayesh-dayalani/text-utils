import React, { useState } from 'react'

export default function TextForm(props) {
    const setUpperCase = () => {
        console.log("upper case btn cliked", text)
        // will convert the current state to uppercase
        setText(text.toUpperCase())
    }
    const setLowerCase = () => {
        console.log("upper case btn cliked", text)
        // will convert the current state to uppercase
        setText(text.toLowerCase())
    }

    const setReset = () => {
        setText("")
    }

    const setCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard","success");
    }

    // event handles the onchange actions as args
    const handleOnChnage = (event) => {
        console.log("handleOnChange!")
        // we will be able to type in the textarea
        // also set the text in the state
        setText(event.target.value)
    }
    const [text, setText] = useState("Default Text")

    return (
        <>
        <div className="container ">
            <div className="container">
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        {/* onchange is used if something is typed in the textarea */}
                        {/* if not added the value will be static/default provided */}
                        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChnage} rows="3"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={setUpperCase}>Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={setLowerCase}>Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={setCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={setReset}>Reset</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((arryElement) => {return arryElement.length!==0}).length} words and {text.length} characters.</p>
                <p>{text.split(" ").length * 0.008} minutes read !</p>
            </div>
            <div className="container my-2">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
        </>
    )
}
