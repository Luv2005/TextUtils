import React, { useState } from 'react';
import "./TextForm.css"

export default function TextForm(props) {
    const [text, setText] = useState("");

    const convertUP = () => setText(text.toUpperCase());

    const convertLP = () => setText(text.toLowerCase());

    const cleartext = () => {
        setText("");
        props.showAlert("you have cleared the text", "danger"); // ✅ Show alert from App.js
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const copytext = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("you have copied the text", "success");
    };

    const removespace = () => {
        let newtext = text.replace(/\s+/g, " ").trim();
        setText(newtext);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const wordCount = text.trim().split(/\s+/).filter((word) => word.length !== 0).length;

    return (
        <>
            <h1>{props.Heading}</h1>
            <div>
                <div className="form-group">
                    <textarea
                        style={{
                            backgroundColor: props.mode === "light" ? "white" : "#343a40",
                            color: props.mode === "light" ? "black" : "white"
                        }}
                        className="form-control"
                        rows="6"
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Enter your text here..."
                    ></textarea>
                </div>

                <div className="buttoncontainer my-2">
                    <button type="button" className="btn btn-primary" onClick={convertUP} disabled={!text}>Uppercase</button>
                    <button type="button" className="btn btn-primary my-2  mx-2" onClick={convertLP} disabled={!text}>Lowercase</button>
                    <button type="button" className="btn btn-primary  my-2 mx-2" onClick={cleartext} disabled={!text}>Clear</button>
                    <button type="button" className="btn btn-warning  my-2 mx-2" onClick={speak} disabled={!text}>pronunciation</button>
                    <button type="button" className="btn btn-primary  my-2 mx-2" onClick={copytext} disabled={!text}>Copy Text</button>
                    <button type="button" className="btn btn-primary   my-2 mx-2" onClick={removespace} disabled={!text}>Remove Space</button>
                </div>
            </div>

            <div className="container mt-3">
               <div className ="summary-box">
                <div className={`p-4 rounded shadow ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
                    <h2>Your Text Summary</h2>
                    <p>{wordCount} words and {text.length} characters</p>
                    <p>{(0.008 * wordCount).toFixed(2)} minutes to read</p>
                    <h2>Preview</h2>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{text.length > 0 ? text : "Nothing to preview!"}</p>
                </div>
               </div>
            </div>

        </>
    );
}
